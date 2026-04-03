(function (global) {
  global.GithubCN = global.GithubCN || {};
  global.GithubCN.dictProfileSearch = [
    ['Overview', '概览'],
    ['Repositories', '仓库'],
    ['Stars', '星标'],
    ['Followers', '关注者'],
    ['Following', '关注中'],
    ['People', '成员'],
    ['Advanced search', '高级搜索'],
    ['Search repositories', '搜索仓库'],
    ['Search issues', '搜索问题'],
    ['Search pull requests', '搜索拉取请求'],
    ['Sort by', '排序方式'],
    ['Newest', '最新'],
    ['Oldest', '最早'],
  ].map(([source, target]) => ({ source, target, scope: 'ui', mode: 'enhanced' }));
})(window);
