# GithubCN

GitHub 页面中文汉化浏览器扩展（Chrome / Edge，Manifest V3）。

## 新版能力（v2）

- 稳定翻译管线：首屏翻译 + Turbo/PJAX 事件 + MutationObserver 增量翻译。
- 安全过滤：默认跳过 `code/pre/input/textarea`、Markdown 正文、Issue/PR 用户正文，避免误翻用户内容。
- 更稳健匹配：`trim`、短语优先、可配置大小写、词边界与正则。
- 属性翻译：`title`、`aria-label`、`placeholder`、`data-tooltip`、`value(按钮类)`。
- Popup 功能：
  - 总开关（中英切换）
  - “仅翻译 GitHub UI”开关
  - 严格/增强模式
  - 页面状态统计（已翻译/忽略/未命中）
  - 一键恢复原文（无需刷新）
  - 导出未命中词条 JSON（调试模式）
- Options 功能：自定义词条的新增 / 删除（存储于 `chrome.storage.local`）。

## 目录结构

```text
src/
  manifest.json
  js/
    constants.js
    storage.js
    translator.js
    observer.js
    content.js
    background.js
    dictionary/
      navigation.js
      repository.js
      issues-pr.js
      actions.js
      settings.js
      profile-search.js
      index.js
  popup/
    popup.html
    popup.js
  options/
    options.html
    options.js
```

## 安装（本地加载）

### Chrome
1. 打开 `chrome://extensions/`
2. 开启「开发者模式」
3. 点击「加载已解压的扩展程序」
4. 选择仓库内 `src/` 目录

### Edge
1. 打开 `edge://extensions/`
2. 开启「开发人员模式」
3. 点击「加载解压缩的扩展」
4. 选择仓库内 `src/` 目录

## 开发与校验

```bash
npm install
npm run test
npm run lint
npm run format
```

## 词条补充方式

- 内置词库位于 `src/js/dictionary/*.js`。
- 用户自定义词条：扩展 `Options` 页面中添加，支持普通文本 / 正则、大小写、词边界。

## 调试模式

- 调试开关常量：`src/js/constants.js` 中 `DEBUG`。
- 开启后可在控制台查看注入日志、命中计数、过滤类型；并可在 popup 导出未命中词条 JSON。

## 已知限制

- GitHub 页面中 React 极快重绘区域可能出现“瞬间英文再变中文”的可见抖动。
- 未命中收集只统计文本节点/属性中的高频英文，不会采集代码片段。
- 严格模式会有意减少翻译范围以降低误伤。
