(function initConstants(global) {
  const DEBUG = false;
  const STORAGE_KEY = 'githubcn_settings';
  const STATS_KEY = 'githubcn_last_stats';
  const MISSES_KEY = 'githubcn_misses';
  const VERSION = '2.0.0';

  const DEFAULT_SETTINGS = {
    enabled: true,
    uiOnly: true,
    mode: 'strict', // strict | enhanced
    debug: DEBUG,
    customEntries: [],
  };

  global.GithubCN = global.GithubCN || {};
  global.GithubCN.constants = {
    DEBUG,
    STORAGE_KEY,
    STATS_KEY,
    MISSES_KEY,
    VERSION,
    DEFAULT_SETTINGS,
    TRANSLATABLE_ATTRS: ['title', 'aria-label', 'placeholder', 'data-tooltip', 'data-label', 'value'],
    SKIP_TAGS: new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'TEXTAREA', 'INPUT', 'SVG', 'PATH']),
  };
})(window);
