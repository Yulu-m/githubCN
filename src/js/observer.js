(function initObserver(global) {
  const ns = global.GithubCN || (global.GithubCN = {});

  function createObserver(onRoot) {
    const pending = new Set();
    let timer = null;

    function schedule(root) {
      pending.add(root || document.body);
      clearTimeout(timer);
      timer = setTimeout(() => {
        const roots = Array.from(pending);
        pending.clear();
        roots.forEach((r) => onRoot(r));
      }, 120);
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.type === 'characterData' || m.type === 'attributes') {
          schedule(m.target);
          return;
        }
        m.addedNodes.forEach((node) => schedule(node));
      });
    });

    function start() {
      if (!document.body) return;
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ns.constants.TRANSLATABLE_ATTRS,
      });
      ['turbo:render', 'turbo:load', 'pjax:end', 'details:toggled'].forEach((evt) => {
        document.addEventListener(evt, () => schedule(document.body), true);
      });
      schedule(document.body);
    }

    function stop() {
      observer.disconnect();
      clearTimeout(timer);
      pending.clear();
    }

    return { start, stop, schedule };
  }

  ns.observer = { createObserver };
})(window);
