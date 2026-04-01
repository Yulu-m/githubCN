const allData = [
  [`Recent Repositories`, `最近仓库`],
  [`Search or jump to…`, `搜索并跳转至...`],
  [`Issues`, `问题`],
  [`Pull`, `合并`],
  [`request`, `请求`],
  [`s`, ``],
  [`Marketplace`, `市场`],
  [`Explore`, `探索`],
  [`Following`, `关注者`],
  [`Find a repository…`, `查找仓库`],
  [`Latest changes`, `最新变化`],
  [`hours ago`, `小时前`],
  [`days ago`, `天前`],
  [`New`, `新建`],
  [`Explore repositories`, `探索存储库`],
  [`Explore more →`, `探索更多 →`],
  [`Set status`, `设置状态`],
  [`Your profile`, `个人信息`],
  [`Your repositories`, `个人仓库`],
  [`Your codespaces`, `你的 codespaces`],
  [`Your projects`, `你的项目`],
  [`Signed in as`, `登陆账户为`],
  [`Feature preview`, `功能预览`],
  [`Upgrade`, `升级`],
  [`Try Enterprise`, `尝试企业版`],
  [`Help`, `帮助`],
  [`Settings`, `设置`],
  [`Sign out`, `退出`],
  [`Overview`, `概述`],
  [`Repositories`, `仓库`],
  [`Projects`, `项目`],
  [`Packages`, `包`],
  [`Popular repositories`, `流行的仓库`],
  [`Edit profile`, `编辑个人信息`],
  [`followers`, ` 被关注`],
  [`following`, ` 关注`],
  [`Public`, `公开`],
  [`Customize your pins`, `定义你的置顶项目`],
  [`Contribution settings`, `贡献设置`],
  [`Pinned`, `置顶`],
  [`Learn how we count contributions`, `了解我们如何计算贡献`],
  [`Code review`, `代码评审`],
  [`Pull requests`, `合并请求`],
  [`Commits`, `提交`],
  [`Contribution activity`, `贡献活动`],
  [`Show more activity`, `显示更多活动`],
  [`Code`, `代码`],
  [`Go to file`, `转至文件`],
  [`Add file`, `添加文件`],
  [`About`, `关于`],
  [`Pin`, `置顶`],
  [`Pin this repository to your profile`, `置顶这个项目到你的个人信息`],
  [`New repository`, `新建仓库`],
  [`Import repository`, `导入仓库`],
  [`New organization`, `新建组织`],
  [`Create a new release`, `创建一个新的版本`],
  [`Publish your first package`, `发布你的第一个包`],
  [`Releases`, `发布`],
  [`Packages `, `包`],
  [`No packages published`, `没有发布任何软件包`],
  [`Languages`, `语言`],
  [`Show more`, `显示更多`],
  [`Recent activity`, `最新动态`],
  [
    `When you take actions across GitHub, we’ll provide links to that activity here.`,
    `当你在 GitHub 上采取行动时，我们会在这里提供该活动的链接。`,
  ],
  [`More`, `更多`],
  [`Subscribe to your news feed`, `订阅你的 feed`],
  [`Blog`, `博客`],
  [`Shop`, `商店`],
  [`Contact GitHub`, `联系 Github`],
  [`Pricing`, `定价`],
  [`Training`, `培训`],
  [`Status`, `状态`],
  [`Security`, `安全`],
  [`Terms`, `团队`],
  [`Privacy`, `隐私`],
  [`Docs`, `文档`],
  [`New project`, `新建项目`],
  [`Activity  overview`, `活动概览`],
  [`Projects`, `项目`],
  [`Security`, `安全`],
  [`Insights`, `统计`],
  [`Create new file`, `创建新的文件`],
  [`Upload files`, `上传文件`],
  [`Code`, `代码`],
  [`Local`, `本地`],
  [`Clone`, `克隆`],
  [`Open with GitHub Desktop`, `在 Github 桌面程序中打开`],
  [`Download ZIP`, `下载压缩包`],
  [`New codespace`, `新建 codespace`],
  [`Less`, `更少`],
  [`Select type`, `选择类型`],
  [`Type`, `类型`],
  [`Language`, `语言`],
  [`Sort`, `排序`],
  [`Private`, `私有`],
  [`Select language`, `选择语言`],
  [`Select order`, `选择顺序`],
  [`Last updated`, `最近更新`],
  [`Create a new repository`, `创建一个新的仓库`],
  [`Owner`, `拥有者`],
  [`Repository name`, `仓库名字`],
  [`Description`, `描述`],
  [`(optional)`, `(可选)`],
  [
    `Anyone on the internet can see this repository. You choose who can commit.`,
    `互联网上的任何人都可以看到这个存储库。你选择谁能够提交。`,
  ],
  [
    `You choose who can see and commit to this repository.`,
    `你可以选择谁可以看到和提交这个版本库。`,
  ],
  [
    `A repository contains all project files, including the revision history. Already have a project repository elsewhere?`,
    `一个仓库包含所有项目文件，包括修订历史。在其他地方已经有一个项目库了？`,
  ],
  [`Import a repository.`, `导入仓库`],
  [
    `Skip this step if you’re importing an existing repository.`,
    `如果你要导入一个已有的版本库，请跳过这一步。`,
  ],
  [
    `Choose which files not to track from a list of templates.`,
    `从一个模板列表中选择哪些文件不需要跟踪。`,
  ],
  [
    `This is where you can write a long description for your project.`,
    `在这里，你可以为你的项目写一个长的描述。`,
  ],
  [
    `A license tells others what they can and can't do with your code.`,
    `许可证告诉别人他们可以和不可以用你的代码做什么。`,
  ],
  [
    `You are creating a public repository in your personal account.`,
    `你正在你的个人账户中创建一个公共库。`,
  ],
  [`Initialize this repository with:`, `用以下方式初始化这个存储库：`],
  [`Create repository`, `创建仓库`],
  [
    `Great repository names are short and memorable. Need inspiration? How about`,
    `伟大的仓库名称是简短而令人难忘的。需要灵感吗？比如 `,
  ],
  [`Your personal account`, `你的个人账户`],
  [`Public profile`, `公开资料`],
  [`Name`, `名字`],
  [`Change username`, `修改用户名`],
  [`Account`, `账户`],
  [`Export account data`, `导出账户数据`],
  [`Appearance`, `外观`],
  [`Accessibility`, `无障碍设施`],
  [`Notifications`, `通知`],
  [`Access`, `访问`],
  [`Personal billing`, `个人帐单`],
  [`Emails`, `邮件`],
  [`Billing and plans`, `账单和计划`],
  [
    `This is a list of SSH keys associated with your account. Remove any keys that you do not recognize.`,
    `这是与你的账户相关的 SSH 密钥的列表，删除任何你不认识的密钥`,
  ],
  [`Organizations`, `组织`],
  [`You are not a member of any organizations.`, `你不是任何组织的成员  `],
  [`Archives`, `归档`],
  [`Security log`, `安全日志`],
  [`Sponsorship log`, `赞助日志`],
  [`No sponsorship activity in this time period`, `这段时间内没有赞助活动`],
  [`Sign in to GitHub`, `登录到 Github`],
  [`Username or email address`, `用户名或邮箱`],
  [`Password`, `密码`],
  [`Sign in`, `登录`],
  [`New to GitHub?`, `刚来 Github？`],
  [`Create an account`, `创建一个账户`],
  [`Forgot password?`, `忘记密码？`],
  [`Create an account`, ``],
  [
    `Label issues and pull requests for new contributors`,
    `为新的贡献者标记问题和合并请求`,
  ],
  [`Filters`, `过滤`],
  [`New Issue`, `新问题`],
  [`There aren’t any open issues.`, `没有任何公开的问题。`],
  [`Signing in…`, `登录中...`],
  [`Edit repository details`, `编辑仓库详情信息`],
  [`Website`, `网站`],
  [`Cancer`, `取消`],
  [`Save changes`, `保存修改`],
  [`Protect this branch`, `保护这个分支`],
  [`Get started with GitHub Actions`, `开始使用 Github Actions`],
  [
    `Build, test, and deploy your code. Make code reviews, branch management, and issue triaging work the way you want. Select a workflow to get started.`,
    `构建、测试和部署你的代码。使代码审查、分支管理和问题分流以你想要的方式进行。选择一个工作流程来开始。`,
  ],
  [`Browse all categories`, `浏览所有类型`],
  [`Automation`, `自动化`],
  [`Deployment`, `部署`],
  [`Continuous integration`, `持续集成`],
  [`Reporting`, `报告`],
  [`General`, `常规`],
  [`Public email`, `公开的邮箱`],
  [`Bio`, `个人简历`],
  [`URL`, `网站`],
  [`Twitter username`, `Twitter 用户名`],
  [`Company`, `公司`],
  [`Location`, `地址`],
  [`Contributions & Activity`, `贡献和活动`],
  [`Successor settings`, `继承人设置`],
  [`You have not designated a successor.`, `你还没有指定继承人`],
  [`Delete account`, `删除账户`],
  [
    `Once you delete your account, there is no going back. Please be certain.`,
    `一旦你删除了你的账户，就不能够找回了，请慎重`,
  ],
  [`Display current local time`, `显示当前的本地时间`],
  [`Keyboard shortcuts`, `快捷键`],
  [`Subscriptions`, `订阅`],
  [`Verified domains`, `验证的域名`],
  [`There are no verified domains.`, `没有经过验证的域名`],
  [`Password and authentication`, `密码和身份验证`],
  [`Change password`, `修改密码`],
  [`Old password`, `旧密码`],
  [`New password`, `新密码`],
  [`Confirm new password`, `确认新的密码`],
  [`Two-factor authentication`, `两步验证`],
  [`Confirm new password`, `确认新的密码`],
  [`Confirm access`, `确认访问`],
  [`Confirm`, `确认`],
  [`Who has access`, `谁有权限`],
  [`Code and automation`, `代码和自动化`],
  [`Default branch`, `默认分支`],
  [`Branch protection rules`, `分支保护规则`],
  [`Protected tags`, `保护标签`],
  [`Environments`, `环境变量`],
  [`Code security and analysis`, `代码安全性和分析`],
  [`Integrations`, `集成`],
  [`Email notifications`, `邮件通知`],
  [`Collaborators`, `合作者`],
  [`Contributors`, `贡献者`],
  [`Community Standards`, `社区标准`],
  [`Traffic`, `流量`],
  [`Code frequency`, `代码频率`],
  [`Dependency graph`, `依赖图`],
  [`Contributors`, `贡献者`],
  [`You can`, `你可以`],
  [`@mention`, `@`],
  [
    `other users and organizations to link to them.`,
    `其他用户和组织来链接它们`,
  ],
  [`Save`, `保存`],
  [`Cancel`, `取消`],
  [`Welcome to the all-new projects`, `欢迎来到全新的项目`],
  [`No open projects`, `没有开放的项目`],
  [`Add a bio`, `添加个人简介`],
  [`Loading more...`, `正在加载中`],
  [
    `Your popular repositories will now be shown instead of your pins.`,
    `你的热门仓库现在将显示，而不是你的置顶`,
  ],
  [`Unpin`, `不置顶`],
  [`Your pins have been updated.`, `你的置顶已经更新了`],
  [`Advanced search`, `高级搜索`],
  [`Branches`, `分支`],
  [`Social Preview`, `社交预览`],
  [
    `Upload an image to customize your repository’s social media preview.`,
    `上传图片来定制你仓库的社交媒体预览`,
  ],
  [`Pull Requests`, `合并请求`],
  [`Danger Zone`, `危险区`],
  [`Change repository visibility`, `修改仓库的可见性`],
  [`Transfer ownership`, `转让所有权`],
  [`This repository is currently public.`, `这个仓库当前是公开的`],
  [`Archive this repository`, `归档这个仓库`],
  [
    `Mark this repository as archived and read-only.`,
    `将此版本库标记为归档和只读`,
  ],
  [`Delete this repository`, `删除这个仓库`],
  [
    `Once you delete a repository, there is no going back. Please be certain.`,
    `一旦你删除了这个仓库，就不能够撤回了，请确认`,
  ],
  [`Are you absolutely sure?`, `你真的确定吗？`],
  [`Change visibility`, `修改可见性`],
  [`Change to private`, `修改为私有`],
  [`Transfer`, `转移`],
  [`Edit status`, `编辑状态`],
  [`Busy`, `忙`],
  [`Clear status`, `清除状态`],
  [`Never`, `从不`],
  [`Your main branch isn't protected`, `你的 main 分支不是受保护的`],
  [
    `Protect this branch from force pushing or deletion, or require status checks before merging.`,
    `保护这个分支不被强行推送或删减，或要求在合并前进行状态检查 `,
  ],
  [`Learn more`, `学习更多`],
  [`Branch protection rule`, `分支保护规则`],
  [`Protect your most important branches`, `保护你最重要的分支`],
  [`Achievements`, `成就`],
  [`Send feedback`, `发送反馈`],
  [`Choose a license`, `选择许可证`],
  [`Learn more.`, `学习更多`],
  [`Import your project to GitHub`, `导入你得项目到 Github`],
  [`Inbox`, `收件箱`],
  [`Prev`, `上页`],
  [`Next`, `下页`],
  [`Saved`, `保存`],
  [`Done`, `完成`],
  [`Manage notifications`, `管理通知`],
  [`See more`, `查看更多`],
  [`Include in the home page`, `显示在页面上`],
  [`Discussions`, `讨论`],
  [`Users`, `用户`],
  [`This repository is currently private.`, `这个仓库当前是私有的`],
  [`Lists`, `列表`],
  [`Create list`, `创建列表`],
  [`Pushes`, `推送`],
  [
    `Limit how many branches and tags can be updated in a single push`,
    `限制一次推送中可以更新多少个分支和标签`,
  ],
  [`I want to make this repository private`, `我想要让这个仓库变为私有`],
  [`I have read and understand these effects`, `我已经阅读并理解了这些影响`],
  [`New issue`, `新建问题`],
  [`Labels`, `标签`],
  [`New milestone`, `新建里程碑`],
  [`Milestones`, `里程碑`],
  [`You haven’t created any Milestones.`, `你还没有创建任何里程碑。`],
  [`Edit`, `编辑`],
  [`Delete`, `删除`],
  [`Close`, `关闭`],
  [`Success`, `完成`],
  [`Dashboard`, `仪表盘`],
  [`to search`, `搜索`],
  [`Create your first project`, `创建您的第一个项目`],
  [
  `Ready to start building? Create a repository for a new idea or bring over an existing repository to keep contributing to it.`,
  `准备好开始构建了吗？为新的想法创建一个存储库，或导入一个存储库以继续为它做出贡献。`,
  ],
  [`Filter`, `筛选`],
  [`Events`, `活动`],
  [`Activity you want to see on your feed`, `您希望在推送中看到的活动`],
  [`Stars`, `星`],
  [`main`, `主干`],
  [`Default`, `默认值`],
  [`Tags`, `标签`],
  [`Watch`, `查看`],
  [`Fork`, `复刻`],
  [`Starred`, `标星`],
  [`Switch branches/tags`, `查看所有分支/标签`],
  [`Profile picture`, `简介图片`],
  [`SSH and GPG keys`, `SSH和GPG密钥`],
  [`Cancel changes`, `取消更改`],
  [`Commit changes...`, `提交更改...`],

  [`Open`, `打开`],
  [`Closed`, `已关闭`],
  [`Merged`, `已合并`],
  [`Review changes`, `审查更改`],
  [`Compare changes`, `比较更改`],
  [`Merge pull request`, `合并拉取请求`],
  [`Conversation`, `讨论`],
  [`Checks`, `检查`],
  [`Files changed`, `文件变更`],
  [`Assignees`, `指派人员`],
  [`Reviewers`, `审查者`],
  [`No one assigned`, `无人指派`],
  [`No reviews`, `暂无审查`],
  [`Development`, `开发`],
  [`Linked issues`, `关联议题`],
  [`Notifications`, `通知`],
  [`Create pull request`, `创建拉取请求`],
  [`Draft pull request`, `草稿拉取请求`],
  [`Open a pull request`, `发起拉取请求`],
  [`Create new discussion`, `发起新讨论`],
  [`Pinned discussions`, `置顶讨论`],
  [`Categories`, `分类`],
  [`Answered`, `已回答`],
  [`Unanswered`, `未回答`],
  [`Mark as answered`, `标记为已回答`],
  [`Convert to issue`, `转换为议题`],
  [`Actions`, `操作`],
  [`All workflows`, `全部工作流`],
  [`Failed`, `失败`],
  [`Cancelled`, `已取消`],
  [`In progress`, `进行中`],
  [`Queued`, `排队中`],
  [`Run workflow`, `运行工作流`],
  [`Re-run jobs`, `重新运行任务`],
  [`Artifacts`, `产物`],
  [`Annotations`, `注解`],
  [`Summary`, `摘要`],
  [`Jobs`, `任务`],
  [`Deployment protection rules`, `部署保护规则`],
  [`Projects (beta)`, `项目（测试版）`],
  [`Roadmap`, `路线图`],
  [`Table`, `表格`],
  [`Board`, `看板`],
  [`Add item`, `添加条目`],
  [`Insights`, `洞察`],
  [`Create new project`, `创建新项目`],
  [`Latest commit`, `最新提交`],
  [`commit`, `提交`],
  [`commits`, `次提交`],
  [`History`, `历史`],
  [`Browse files`, `浏览文件`],
  [`View all files`, `查看所有文件`],
  [`Raw`, `原始`],
  [`Blame`, `追溯`],
  [`Delete file`, `删除文件`],
  [`Edit file`, `编辑文件`],
  [`Open in desktop`, `在桌面端打开`],
  [`View blame`, `查看追溯`],
  [`Create tag`, `创建标签`],
  [`Compare`, `比较`],
  [`Release notes`, `发布说明`],
  [`Latest`, `最新`],
  [`Draft`, `草稿`],
  [`Pre-release`, `预发布`],
  [`Assets`, `资源`],
  [`Download`, `下载`],
  [`Watchers`, `关注者`],
  [`Stars`, `星标`],
  [`Forks`, `派生`],
  [`Followers`, `关注者`],
  [`People`, `成员`],
  [`Teams`, `团队`],
  [`Pinned repositories`, `置顶仓库`],
  [`Block or Report`, `拉黑或举报`],
  [`Sponsoring`, `赞助中`],
  [`Contribution graph`, `贡献图`],
  [`Organizations`, `组织`],
  [`Owned by`, `归属于`],
  [`Member since`, `加入时间`],
  [`General settings`, `常规设置`],
  [`Moderation options`, `管理选项`],
  [`Saved replies`, `已保存回复`],
  [`Code, planning, and automation`, `代码、计划与自动化`],
  [`Code review limits`, `代码审查限制`],
  [`Default to pull request title`, `默认使用拉取请求标题`],
  [`Code search`, `代码搜索`],
  [`No results matched your search.`, `没有匹配搜索结果。`],
  [`Clear filters`, `清空筛选`],
  [`Sort by`, `排序方式`],
  [`Newest`, `最新`],
  [`Oldest`, `最早`],
  [`Most commented`, `评论最多`],
  [`Least commented`, `评论最少`],
  [`Recently updated`, `最近更新`],
  [`Least recently updated`, `最久未更新`],
  [`Author`, `作者`],
  [`Label`, `标签`],
  [`Projects`, `项目`],
  [`Milestone`, `里程碑`],
  [`Assignee`, `指派人`],
  [`Review status`, `审查状态`],
  [`No description provided.`, `未提供描述。`],
  [`Uh oh!`, `哎呀！`],
  [`There was an error while loading.`, `加载时发生错误。`],
  [`Retry`, `重试`],
  [`Wiki`, `维基`],
  [`Pages`, `页面`],
  [`Pulse`, `脉搏图`],
  [`Graph`, `图表`],
  [`Contributors`, `贡献者`],
  [`Dependabot alerts`, `Dependabot 警报`],
  [`Code scanning alerts`, `代码扫描警报`],
  [`Secret scanning alerts`, `密钥扫描警报`],
  [`Security policy`, `安全策略`],
  [`Open issues`, `开放议题`],
  [`Open pull requests`, `开放拉取请求`],
  [`No open pull requests`, `没有开放的拉取请求`],
  [`No open issues`, `没有开放的议题`],
  [`No closed issues`, `没有已关闭的议题`],
  [`No closed pull requests`, `没有已关闭的拉取请求`],
  [`Create new label`, `创建新标签`],
  [`Create new milestone`, `创建新里程碑`],
  [`Jump to`, `跳转到`],
  [`Filter by`, `按条件筛选`],
  [`Apply filters`, `应用筛选`],
  [`Clear current search query, filters, and sorts`, `清除当前搜索条件、筛选和排序`],
  [`Choose repositories`, `选择仓库`],
  [`Search repositories`, `搜索仓库`],
  [`Search issues`, `搜索议题`],
  [`Search pull requests`, `搜索拉取请求`],
  [`Open sidebar`, `打开侧边栏`],
  [`Close sidebar`, `关闭侧边栏`],
  [`Account menu`, `账户菜单`],
  [`View profile`, `查看个人资料`],
  [`Feature request`, `功能请求`],
  [`Bug report`, `缺陷报告`],
  [`Pinned items`, `置顶条目`],
  [`No items found`, `未找到条目`],
  [`No results`, `无结果`],
  [`Loading`, `加载中`],
  [`Dismiss`, `关闭`],
  [`Submit`, `提交`],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
  [``, ``],
];

// 预留按模块扩展词条：后续新增页面适配时，只需向对应模块补充词条
const translationModules = {
  codeSearch: [
    [`Code search results`, `代码搜索结果`],
    [`results`, `条结果`],
    [`Best match`, `最佳匹配`],
    [`Sort: Best match`, `排序：最佳匹配`],
    [`Sort: Most indexed`, `排序：索引最多`],
    [`Languages`, `语言`],
    [`Path`, `路径`],
    [`Repository`, `仓库`],
    [`Organization`, `组织`],
    [`Advanced`, `高级`],
    [`Did you mean`, `你是否想搜索`],
    [`No code results`, `没有代码搜索结果`],
    [`Try adjusting your search`, `请尝试调整搜索条件`],
  ],
  actionsRunDetail: [
    [`Workflow run`, `工作流运行`],
    [`View workflow file`, `查看工作流文件`],
    [`View workflow`, `查看工作流`],
    [`Re-run all jobs`, `重新运行所有任务`],
    [`Re-run failed jobs`, `重新运行失败任务`],
    [`Cancel workflow`, `取消工作流`],
    [`View raw logs`, `查看原始日志`],
    [`Download logs`, `下载日志`],
    [`Step summary`, `步骤摘要`],
    [`Waiting`, `等待中`],
    [`Skipped`, `已跳过`],
    [`Timed out`, `已超时`],
  ],
  projectsV2: [
    [`Project settings`, `项目设置`],
    [`Views`, `视图`],
    [`Group by`, `分组方式`],
    [`Filter by keyword`, `按关键词筛选`],
    [`Sort by`, `排序方式`],
    [`Add field`, `添加字段`],
    [`Field type`, `字段类型`],
    [`Single select`, `单选`],
    [`Iteration`, `迭代`],
    [`Automation`, `自动化`],
    [`Workflows`, `工作流`],
    [`Layout`, `布局`],
  ],
  securityDeepPages: [
    [`Security overview`, `安全概览`],
    [`Code scanning`, `代码扫描`],
    [`Secret scanning`, `密钥扫描`],
    [`Dependabot`, `Dependabot`],
    [`Alerts`, `警报`],
    [`Configurations`, `配置`],
    [`Enable`, `启用`],
    [`Disable`, `禁用`],
    [`View details`, `查看详情`],
  ],
  discussionsEditor: [
    [`Write`, `编写`],
    [`Preview`, `预览`],
    [`Add a title`, `添加标题`],
    [`Select a category`, `选择分类`],
    [`Mark as duplicate`, `标记为重复`],
    [`Lock conversation`, `锁定讨论`],
    [`Unlock conversation`, `解锁讨论`],
    [`Pin discussion`, `置顶讨论`],
    [`Unpin discussion`, `取消置顶讨论`],
    [`Save draft`, `保存草稿`],
  ],
};

const MutationObserverConfig = {
  childList: true,
  subtree: true,
  characterData: true,
  attributes: true,
  attributeFilter: [
    "data-label",
    "placeholder",
    "value",
    "aria-label",
    "title",
    "aria-placeholder",
    "data-disable-with",
    "data-signin-label",
  ],
};

const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "CODE",
  "PRE",
  "TEXTAREA",
  "SVG",
  "PATH",
]);

const TRANSLATE_ATTRS = [
  "data-label",
  "placeholder",
  "value",
  "aria-label",
  "title",
  "aria-placeholder",
  "data-disable-with",
  "data-signin-label",
];

const dataMap = new Map();
const dataMapLower = new Map();
const allEntries = [...allData, ...Object.values(translationModules).flat()];
allEntries.forEach(([key, val]) => {
  if (!key || !val) return;
  const normalized = normalizeText(key);
  // 过滤过短/高误伤词条，避免误翻译用户名、路径和技术文本
  if (normalized.length <= 1) return;
  if (!normalized) return;
  if (!dataMap.has(normalized)) dataMap.set(normalized, val);
  const lower = normalized.toLowerCase();
  if (!dataMapLower.has(lower)) dataMapLower.set(lower, val);
});

function normalizeText(text = "") {
  return text.replace(/\s+/g, " ").trim();
}

function getTranslated(text = "") {
  const normalized = normalizeText(text);
  if (!normalized) return "";
  return dataMap.get(normalized) || dataMapLower.get(normalized.toLowerCase()) || "";
}

function shouldSkipTextNode(node) {
  const parent = node.parentElement;
  if (!parent) return true;
  if (SKIP_TAGS.has(parent.tagName)) return true;
  if (parent.closest("pre, code, textarea, [data-code-text], .blob-code")) return true;
  if (parent.closest(".blob-wrapper, .react-code-view, .markdown-body pre")) return true;
  // 避免误翻用户生成正文（Discussion/Issue/PR 评论正文）
  if (parent.closest(".comment-body, .markdown-body p, .js-comment-body")) return true;
  // Actions 日志正文只保留 UI 控件翻译，不翻译具体日志输出
  if (parent.closest(".js-checks-log, .ActionsLog, .js-log-line")) return true;
  return false;
}

function looksLikeTechnicalText(text) {
  if (!text) return true;
  if (/^[a-f0-9]{7,40}$/i.test(text)) return true; // SHA
  if (/^refs\/|^[~^./\\-]+|\.\/|\/$/.test(text)) return true; // 路径/分支引用
  if (/^[@#][\w-]+$/.test(text)) return true; // @mention / #123
  if (/[`$><{}[\]\\]/.test(text)) return true; // 命令/代码风格
  return false;
}

function translateTextNode(node) {
  if (!node || node.nodeType !== Node.TEXT_NODE || shouldSkipTextNode(node)) return;
  const current = node.textContent;
  if (!current || !current.trim()) return;
  if (looksLikeTechnicalText(current.trim())) return;
  const translated = getTranslated(current);
  if (translated && translated !== current) {
    node.textContent = translated;
  }
}

function translateElementAttributes(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE || SKIP_TAGS.has(el.tagName)) return;
  TRANSLATE_ATTRS.forEach((attr) => {
    if (!el.hasAttribute(attr)) return;
    if (attr === "value") {
      const type = (el.getAttribute("type") || "").toLowerCase();
      const tag = el.tagName;
      // 仅翻译按钮类 value，避免误改用户输入框内容
      const isButtonLike =
        tag === "BUTTON" ||
        (tag === "INPUT" && ["button", "submit", "reset"].includes(type));
      if (!isButtonLike) return;
    }
    const value = el.getAttribute(attr);
    if (!value || looksLikeTechnicalText(value.trim())) return;
    const translated = getTranslated(value || "");
    if (translated && translated !== value) {
      el.setAttribute(attr, translated);
    }
  });
}

function translateTree(root) {
  if (!root) return;

  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root);
    return;
  }

  if (root.nodeType === Node.ELEMENT_NODE) {
    translateElementAttributes(root);
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let current = walker.currentNode;
  while (current) {
    if (current.nodeType === Node.TEXT_NODE) {
      translateTextNode(current);
    } else {
      translateElementAttributes(current);
    }
    current = walker.nextNode();
  }
}

let rafId = null;
const pendingRoots = new Set();
function scheduleTranslate(root = document.body) {
  pendingRoots.add(root || document.body);
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    const roots = Array.from(pendingRoots);
    pendingRoots.clear();
    rafId = null;
    roots.forEach((item) => translateTree(item));
  });
}

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "characterData") {
      scheduleTranslate(mutation.target);
      continue;
    }

    if (mutation.type === "attributes") {
      scheduleTranslate(mutation.target);
      continue;
    }

    for (const node of mutation.addedNodes) {
      scheduleTranslate(node);
    }
  }
});

function startObserve() {
  if (!document.body) return;
  observer.observe(document.body, MutationObserverConfig);
  scheduleTranslate(document.body);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startObserve, { once: true });
} else {
  startObserve();
}

// 适配 GitHub Turbo/PJAX 页面切换与局部异步加载
["turbo:render", "turbo:load", "pjax:end", "details:toggled"].forEach((evt) => {
  document.addEventListener(evt, () => scheduleTranslate(document.body), true);
});
