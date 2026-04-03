(function initStorage(global) {
  const ns = global.GithubCN || (global.GithubCN = {});

  function getChromeStorage() {
    return chrome?.storage?.local;
  }

  async function getSettings() {
    const { STORAGE_KEY, DEFAULT_SETTINGS } = ns.constants;
    const storage = getChromeStorage();
    if (!storage) return { ...DEFAULT_SETTINGS };
    const payload = await storage.get([STORAGE_KEY, 'githubcn_enabled', 'githubcn_custom_dict']);
    const settings = { ...DEFAULT_SETTINGS, ...(payload[STORAGE_KEY] || {}) };

    // migration from older keys
    if (typeof payload.githubcn_enabled === 'boolean') {
      settings.enabled = payload.githubcn_enabled;
    }
    if (Array.isArray(payload.githubcn_custom_dict) && !settings.customEntries.length) {
      settings.customEntries = payload.githubcn_custom_dict.map((it, idx) => ({
        id: String(Date.now() + idx),
        source: it[0] || '',
        target: it[1] || '',
        regex: false,
        caseSensitive: false,
        boundary: true,
      }));
    }
    return settings;
  }

  async function saveSettings(settings) {
    const { STORAGE_KEY } = ns.constants;
    await getChromeStorage().set({ [STORAGE_KEY]: settings });
    return settings;
  }

  async function saveStats(stats) {
    const { STATS_KEY } = ns.constants;
    await getChromeStorage().set({ [STATS_KEY]: stats });
  }

  async function getStats() {
    const { STATS_KEY } = ns.constants;
    const data = await getChromeStorage().get(STATS_KEY);
    return data[STATS_KEY] || null;
  }

  async function saveMisses(misses) {
    const { MISSES_KEY } = ns.constants;
    await getChromeStorage().set({ [MISSES_KEY]: misses });
  }

  async function getMisses() {
    const { MISSES_KEY } = ns.constants;
    const data = await getChromeStorage().get(MISSES_KEY);
    return data[MISSES_KEY] || {};
  }

  ns.storage = { getSettings, saveSettings, saveStats, getStats, saveMisses, getMisses };
})(window);
