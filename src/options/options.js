(async function () {
  const ns = window.GithubCN;
  const tbody = document.getElementById('tbody');

  async function read() {
    return ns.storage.getSettings();
  }

  async function write(settings) {
    await ns.storage.saveSettings(settings);
  }

  function row(entry) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${entry.source}</td><td>${entry.target}</td><td>${entry.regex ? 'regex' : 'plain'} / ${entry.caseSensitive ? 'case' : 'nocase'} / ${entry.boundary === false ? 'no-boundary' : 'boundary'}</td><td><button data-id="${entry.id}">删除</button></td>`;
    tr.querySelector('button').addEventListener('click', async () => {
      const settings = await read();
      settings.customEntries = settings.customEntries.filter((x) => x.id !== entry.id);
      await write(settings);
      await render();
    });
    return tr;
  }

  async function render() {
    const settings = await read();
    tbody.innerHTML = '';
    settings.customEntries.forEach((entry) => tbody.appendChild(row(entry)));
  }

  document.getElementById('add').addEventListener('click', async () => {
    const source = document.getElementById('source').value.trim();
    const target = document.getElementById('target').value.trim();
    if (!source || !target) return;
    const settings = await read();
    settings.customEntries.push({
      id: String(Date.now()),
      source,
      target,
      regex: document.getElementById('regex').checked,
      caseSensitive: document.getElementById('caseSensitive').checked,
      boundary: document.getElementById('boundary').checked,
    });
    await write(settings);
    await render();
  });

  render();
})();
