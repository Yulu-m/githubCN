(function (global) {
  global.GithubCN = global.GithubCN || {};
  global.GithubCN.dictNavigation = [
    ['Issues', '问题'],
    ['Pull requests', '拉取请求'],
    ['Actions', '工作流'],
    ['Projects', '项目'],
    ['Security', '安全'],
    ['Insights', '洞察'],
    ['Settings', '设置'],
    ['Code', '代码'],
    ['Wiki', '维基'],
    ['Discussions', '讨论'],
    ['Marketplace', '市场'],
    ['Explore', '探索'],
    ['Notifications', '通知'],
    ['New repository', '新建仓库'],
    ['Your profile', '个人资料'],
    ['Your repositories', '你的仓库'],
    ['Sign out', '退出登录'],
    ['Search or jump to…', '搜索或跳转到…'],
  ].map(([source, target]) => ({ source, target, scope: 'ui', mode: 'strict' }));
})(window);
