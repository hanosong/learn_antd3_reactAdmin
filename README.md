<p align="center">
   <a href="https://nlrx-wjc.github.io/react-antd-admin-template/" target="_blank">
      <img src="./logo.png"/>
   </a>
</p>

# 简介

本项目是参照网上前辈的框架编写的，旨在熟悉 React 相关技术和 antd3 版本 UI 框架的用法。
是一个基于 `React` 和 `Ant Design` 的后台管理系统模板。它内置了用户登录/登出，动态路由，权限校验，用户管理等典型的业务模型

# 功能

```bash
- 登录 / 注销

- 权限验证
  - 页面权限
  - 路由权限

- 全局功能
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本
  - Markdown

- Excel
  - 导出excel
  - 导入excel
  - 前端可视化excel

- Zip
  - 导出zip

- 错误页面
  - 404

- 组件
  - 拖拽列表

- 表格
- Dashboard
- 引导页
- ECharts 图表
- 剪贴板
```

# 目录结构

```bash
├─ public                     # 静态资源
│   ├─ favicon.ico            # favicon图标
│   └─ index.html             # html模板
├─ src                        # 项目源代码
│   ├─ api                    # 所有请求
│   ├─ assets                 # 图片 字体等静态资源
│   ├─ components             # 全局公用组件
│   ├─ config                 # 全局配置
│   │   ├─ menuConfig.js      # 导航菜单配置
│   │   └─ routeMap.js        # 路由配置
│   ├─ lib                    # 第三方库按需加载
│   ├─ mock                   # 项目mock 模拟数据
│   ├─ store                  # 全局 store管理
│   ├─ styles                 # 全局样式
│   ├─ utils                  # 全局公用方法
│   ├─ views                  # views 所有页面
│   ├─ App.js                 # 入口页面
│   ├─ defaultSettings.js     # 全局默认配置
│   └─index.js                # 源码入口
├── .env.development          # 开发环境变量配置
├── .env.production           # 生产环境变量配置
├── config-overrides.js       # 对cra的webpack自定义配置
├── deploy.sh                 # CI部署脚本
├── .travis.yml               # 自动化CI配置
└── package.json              # package.json
```