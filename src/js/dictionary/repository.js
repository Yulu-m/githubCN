(function (global) {
  global.GithubCN = global.GithubCN || {};
  global.GithubCN.dictRepository = [
    ['Releases', '发布版本'],
    ['Packages', '软件包'],
    ['Contributors', '贡献者'],
    ['Watch', '关注'],
    ['Fork', '派生'],
    ['Star', '星标'],
    ['Unstar', '取消星标'],
    ['Latest commit', '最新提交'],
    ['Go to file', '转到文件'],
    ['Add file', '添加文件'],
    ['Branch', '分支'],
    ['Tags', '标签'],
    ['Compare', '比较'],
    ['History', '历史'],
    ['Raw', '原始内容'],
    ['Blame', '追溯'],
    ['Edit file', '编辑文件'],
    ['Delete file', '删除文件'],
    ['Open pull request', '发起拉取请求'],
  ].map(([source, target]) => ({ source, target, scope: 'ui', mode: 'strict' }));
})(window);
