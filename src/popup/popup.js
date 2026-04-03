(async function () {
  const ns = window.GithubCN;
  const enabledEl = document.getElementById('enabled');
  const uiOnlyEl = document.getElementById('uiOnly');
  const modeEl = document.getElementById('mode');
  const statsEl = document.getElementById('stats');

  const settings = await ns.storage.getSettings();
  enabledEl.checked = settings.enabled;
  uiOnlyEl.checked = settings.uiOnly;
  modeEl.value = settings.mode;

  async function savePatch(patch) {
    const next = { ...(await ns.storage.getSettings()), ...patch };
    await ns.storage.saveSettings(next);
  }

  enabledEl.addEventListener('change', () => savePatch({ enabled: enabledEl.checked }));
  uiOnlyEl.addEventListener('change', () => savePatch({ uiOnly: uiOnlyEl.checked }));
  modeEl.addEventListener('change', () => savePatch({ mode: modeEl.value }));

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab?.id) {
    const result = await chrome.tabs.sendMessage(tab.id, { type: 'GITHUBCN_GET_STATUS' }).catch(() => null);
    if (result?.ok) {
      const s = result.stats;
      statsEl.textContent = `本页已翻译 ${s.translated} 项 / 忽略 ${s.ignored} 项 / 未命中 ${s.unmatched} 项`;
    } else {
      statsEl.textContent = '当前页面未检测到内容脚本（请在 github.com 页面打开）';
    }
  }

  document.getElementById('restore').addEventListener('click', async () => {
    if (tab?.id) await chrome.tabs.sendMessage(tab.id, { type: 'GITHUBCN_RESTORE' });
  });

  document.getElementById('exportMisses').addEventListener('click', async () => {
    if (!tab?.id) return;
    const result = await chrome.tabs.sendMessage(tab.id, { type: 'GITHUBCN_EXPORT_MISSES' }).catch(() => null);
    const blob = new Blob([JSON.stringify(result?.misses || {}, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    await chrome.downloads.download({ url, filename: 'githubcn-misses.json', saveAs: true });
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  });

  document.getElementById('openOptions').addEventListener('click', () => chrome.runtime.openOptionsPage());
})();
