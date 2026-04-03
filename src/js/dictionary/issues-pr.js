(function (global) {
  global.GithubCN = global.GithubCN || {};
  global.GithubCN.dictIssuePr = [
    ['New issue', '新建问题'],
    ['New pull request', '新建拉取请求'],
    ['Assignees', '指派人'],
    ['Reviewers', '审查者'],
    ['Labels', '标签'],
    ['Milestone', '里程碑'],
    ['No description provided.', '未提供描述。'],
    ['Open', '打开'],
    ['Closed', '已关闭'],
    ['Merged', '已合并'],
    ['Conversation', '讨论'],
    ['Files changed', '文件变更'],
    ['Review changes', '审查变更'],
    ['Create pull request', '创建拉取请求'],
    ['Draft pull request', '草稿拉取请求'],
  ].map(([source, target]) => ({ source, target, scope: 'ui', mode: 'enhanced' }));
})(window);
