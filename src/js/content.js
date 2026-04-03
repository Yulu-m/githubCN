(function bootstrap(global) {
  const ns = global.GithubCN;
  let runtime = null;
  let pageObserver = null;

  function log(...args) {
    if (runtime?.settings?.debug) console.log('[GithubCN]', ...args);
  }

  async function persistStatus() {
    if (!runtime) return;
    await ns.storage.saveStats({
      ...runtime.translator.stats,
      url: location.href,
      updatedAt: Date.now(),
    });
    if (runtime.settings.debug) {
      await ns.storage.saveMisses(runtime.translator.misses);
    }
  }

  async function runTranslate(root) {
    if (!runtime?.settings?.enabled) return;
    runtime.translator.translateRoot(root || document.body);
    await persistStatus();
  }

  function restorePage() {
    runtime?.translator?.restoreRoot(document.body);
  }

  async function init() {
    const settings = await ns.storage.getSettings();
    runtime = {
      settings,
      translator: ns.translator.createTranslator(settings),
    };
    log('content injected', { href: location.href, settings });

    pageObserver = ns.observer.createObserver(runTranslate);
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => pageObserver.start(), { once: true });
    } else {
      pageObserver.start();
    }

    chrome.storage.onChanged.addListener(async (changes, area) => {
      if (area !== 'local' || !changes[ns.constants.STORAGE_KEY]) return;
      const next = changes[ns.constants.STORAGE_KEY].newValue || ns.constants.DEFAULT_SETTINGS;
      runtime.settings = next;
      restorePage();
      runtime.translator = ns.translator.createTranslator(next);
      if (next.enabled) await runTranslate(document.body);
      log('settings updated', next);
    });

    chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
      if (message?.type === 'GITHUBCN_GET_STATUS') {
        sendResponse({ ok: true, stats: runtime.translator.stats, settings: runtime.settings, url: location.href });
        return true;
      }
      if (message?.type === 'GITHUBCN_RESTORE') {
        restorePage();
        sendResponse({ ok: true });
        return true;
      }
      if (message?.type === 'GITHUBCN_FORCE_TRANSLATE') {
        runTranslate(document.body).then(() => sendResponse({ ok: true }));
        return true;
      }
      if (message?.type === 'GITHUBCN_EXPORT_MISSES') {
        sendResponse({ ok: true, misses: runtime.translator.misses });
        return true;
      }
      return false;
    });
  }

  init();
})(window);
