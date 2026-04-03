(function (global) {
  global.GithubCN = global.GithubCN || {};
  global.GithubCN.dictActions = [
    ['All workflows', '全部工作流'],
    ['Run workflow', '运行工作流'],
    ['Re-run jobs', '重新运行任务'],
    ['In progress', '进行中'],
    ['Queued', '排队中'],
    ['Failed', '失败'],
    ['Cancelled', '已取消'],
    ['Artifacts', '产物'],
    ['Summary', '摘要'],
    ['Jobs', '任务'],
  ].map(([source, target]) => ({ source, target, scope: 'ui', mode: 'enhanced' }));
})(window);
