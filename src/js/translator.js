(function initTranslator(global) {
  const ns = global.GithubCN || (global.GithubCN = {});

  function normalizeText(text) {
    return String(text || '').replace(/\s+/g, ' ').trim();
  }

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function compileEntries(entries) {
    return [...entries]
      .map((entry) => {
        if (entry.regex) {
          return {
            ...entry,
            pattern: new RegExp(entry.source, entry.caseSensitive ? 'g' : 'gi'),
            rank: entry.source.length,
          };
        }
        const normalized = normalizeText(entry.source);
        const source = entry.boundary === false ? escapeRegExp(normalized) : `\\b${escapeRegExp(normalized)}\\b`;
        return {
          ...entry,
          normalized,
          pattern: new RegExp(source, entry.caseSensitive ? 'g' : 'gi'),
          rank: normalized.length,
        };
      })
      .sort((a, b) => b.rank - a.rank);
  }

  function shouldSkipElement(el, settings, stats) {
    const { SKIP_TAGS } = ns.constants;
    if (!el) return true;
    if (SKIP_TAGS.has(el.tagName)) return true;
    if (el.closest('pre, code, .blob-code, .blob-wrapper, .react-code-view, textarea, input, [contenteditable="true"], [role="textbox"]')) return true;
    if (el.closest('.markdown-body, .comment-body, .js-comment-body, [data-testid="issue-body"], .commit-desc, .TimelineItem-body')) return true;
    if (settings.uiOnly && el.closest('article, .markdown-body, .comment-body')) return true;
    if (stats) stats.ignored += 1;
    return false;
  }

  function createTranslator(settings) {
    const entries = compileEntries(ns.getDictionary(settings));
    const translatedNodes = new WeakMap();
    const attrCache = new WeakMap();
    const misses = {};
    const stats = { translated: 0, ignored: 0, unmatched: 0, matchedEntries: 0 };

    function translateString(value) {
      const raw = String(value || '');
      if (!raw.trim()) return raw;
      let output = raw;
      let matched = false;
      for (const entry of entries) {
        if (!entry.pattern.test(output)) continue;
        entry.pattern.lastIndex = 0;
        output = output.replace(entry.pattern, entry.target);
        stats.matchedEntries += 1;
        matched = true;
      }
      if (!matched) {
        const key = normalizeText(raw);
        if (key && /^[A-Za-z][\w\s\-:/().,&!?]{2,80}$/.test(key)) {
          misses[key] = (misses[key] || 0) + 1;
          stats.unmatched += 1;
        }
      }
      return output;
    }

    function translateTextNode(node) {
      if (!node || node.nodeType !== Node.TEXT_NODE || !node.parentElement) return;
      if (shouldSkipElement(node.parentElement, settings, stats)) return;
      const current = node.textContent || '';
      if (!current.trim()) return;
      if (translatedNodes.get(node) === current) return;
      const next = translateString(current);
      if (next !== current) {
        if (!node.__githubcn_original) node.__githubcn_original = current;
        node.textContent = next;
        stats.translated += 1;
      }
      translatedNodes.set(node, node.textContent || '');
    }

    function translateAttributes(el) {
      if (!el || shouldSkipElement(el, settings)) return;
      const snapshot = ns.constants.TRANSLATABLE_ATTRS.map((a) => `${a}:${el.getAttribute(a) || ''}`).join('|');
      if (attrCache.get(el) === snapshot) return;
      ns.constants.TRANSLATABLE_ATTRS.forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        if (attr === 'value' && el.tagName === 'INPUT') {
          const t = (el.getAttribute('type') || '').toLowerCase();
          if (!['button', 'submit', 'reset'].includes(t)) return;
        }
        const value = el.getAttribute(attr) || '';
        const next = translateString(value);
        if (next !== value) {
          if (!el.__githubcn_attr_original) el.__githubcn_attr_original = {};
          if (!el.__githubcn_attr_original[attr]) el.__githubcn_attr_original[attr] = value;
          el.setAttribute(attr, next);
          stats.translated += 1;
        }
      });
      attrCache.set(el, ns.constants.TRANSLATABLE_ATTRS.map((a) => `${a}:${el.getAttribute(a) || ''}`).join('|'));
    }

    function translateRoot(root) {
      const target = root || document.body;
      if (!target) return;
      if (target.nodeType === Node.TEXT_NODE) {
        translateTextNode(target);
        return;
      }
      const walker = document.createTreeWalker(target, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      let node = walker.currentNode;
      while (node) {
        if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
        else translateAttributes(node);
        node = walker.nextNode();
      }
    }

    function restoreRoot(root) {
      const target = root || document.body;
      const walker = document.createTreeWalker(target, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      let node = walker.currentNode;
      while (node) {
        if (node.nodeType === Node.TEXT_NODE && node.__githubcn_original) {
          node.textContent = node.__githubcn_original;
        }
        if (node.nodeType === Node.ELEMENT_NODE && node.__githubcn_attr_original) {
          Object.entries(node.__githubcn_attr_original).forEach(([k, v]) => node.setAttribute(k, v));
        }
        node = walker.nextNode();
      }
    }

    return { translateRoot, restoreRoot, stats, misses };
  }

  ns.translator = { createTranslator, normalizeText };
})(window);
