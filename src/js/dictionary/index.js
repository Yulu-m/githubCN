(function (global) {
  const ns = global.GithubCN || (global.GithubCN = {});
  const base = [
    ...(ns.dictNavigation || []),
    ...(ns.dictRepository || []),
    ...(ns.dictIssuePr || []),
    ...(ns.dictActions || []),
    ...(ns.dictSettings || []),
    ...(ns.dictProfileSearch || []),
  ];

  ns.getDictionary = function getDictionary(settings) {
    const mode = settings?.mode || 'strict';
    const uiOnly = settings?.uiOnly !== false;
    const custom = (settings?.customEntries || [])
      .filter((x) => x.source && x.target)
      .map((x) => ({
        source: String(x.source),
        target: String(x.target),
        regex: Boolean(x.regex),
        caseSensitive: Boolean(x.caseSensitive),
        boundary: x.boundary !== false,
        scope: 'ui',
        mode: 'enhanced',
      }));

    return [...base, ...custom].filter((entry) => {
      if (mode === 'strict' && entry.mode === 'enhanced') return false;
      if (uiOnly && entry.scope !== 'ui') return false;
      return true;
    });
  };
})(window);
