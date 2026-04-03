(function (global) {
  global.GithubCN = global.GithubCN || {};
  global.GithubCN.dictSettings = [
    ['General', '常规'],
    ['Appearance', '外观'],
    ['Accessibility', '无障碍'],
    ['Notifications', '通知'],
    ['Profile', '个人资料'],
    ['Account', '账户'],
    ['Password and authentication', '密码和身份验证'],
    ['Change password', '修改密码'],
    ['Save', '保存'],
    ['Cancel', '取消'],
  ].map(([source, target]) => ({ source, target, scope: 'ui', mode: 'enhanced' }));
})(window);
