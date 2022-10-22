/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "首页",
    path: "/dashboard",
    icon: "home",
    roles:["admin","editor","guest"]
  },
  {
    title: "开发文档",
    path: "/doc",
    icon: "file",
    roles:["admin","editor","guest"]
  },
  {
    title: "引导页",
    path: "/guide",
    icon: "key",
    roles:["admin","editor"]
  },
  {
    title: "权限测试",
    path: "/permission",
    icon: "lock",
    children: [
      {
        title: "权限说明",
        path: "/permission/explanation",
        roles:["admin"]
      },
      {
        title: "admin页面",
        path: "/permission/adminPage",
        roles:["admin"]
      },
      {
        title: "guest页面",
        path: "/permission/guestPage",
        roles:["guest"]
      },
      {
        title: "editor页面",
        path: "/permission/editorPage",
        roles:["editor"]
      },
    ],
  },
  {
    title: "组件",
    path: "/components",
    icon: "appstore",
    roles:["admin","editor"],
    children: [
      {
        title: "富文本",
        path: "/components/richTextEditor",
        roles:["admin","editor"],
      },
      {
        title: "Markdown",
        path: "/components/Markdown",
        roles:["admin","editor"],
      },
      {
        title: "拖拽列表",
        path: "/components/draggable",
        roles:["admin","editor"],
      },
    ],
  },
  {
    title: "图表",
    path: "/charts",
    icon: "area-chart",
    roles:["admin","editor"],
    children: [
      {
        title: "键盘图表",
        path: "/charts/keyboard",
        roles:["admin","editor"],
      },
      {
        title: "折线图",
        path: "/charts/line",
        roles:["admin","editor"],
      },
      {
        title: "混合图表",
        path: "/charts/mix-chart",
        roles:["admin","editor"],
      },
    ],
  },
  {
    title: "路由嵌套",
    path: "/nested",
    icon: "cluster",
    roles:["admin","editor"],
    children: [
      {
        title: "Form表单",
        path: "/nested/form",
        children: [
          {
            title: "基础表单",
            path: "/nested/form/form-1",
            roles:["admin","editor"],
          },
          {
            title: "动态渲染表单",
            path: "/nested/form/form-2",
            children: [
              {
                title: "多个表单",
                path: "/nested/form/form-2/form-2-1",
                roles:["admin","editor"],
              },
              {
                title: "动态增删",
                path: "/nested/form/form-2/form-2-2",
                roles:["admin","editor"],
              },
            ],
          },
        ],
      },
      {
        title: "Table",
        path: "/nested/table",
        roles:["admin","editor"],
        children:[
          {
            title: "基础表格",
            path: "/nested/table/table-1",
            roles:["admin","editor"],
          },
          {
            title: "可编辑表格",
            path: "/nested/table/table-2",
            roles:["admin","editor"],
          },
        ]
      },
      {
        title: "DatePicker",
        path: "/nested/date",
        roles:["admin","editor"],
        children:[
          {
            title: "datepicker",
            path: "/nested/date/date-1",
            roles:["admin","editor"],
          },
          {
            title: "timepicker",
            path: "/nested/date/date-2",
            roles:["admin","editor"],
          },
        ]
      },
      {
        title: "下拉框",
        path: "/nested/select",
        roles:["admin","editor"],
        children:[
          {
            title: "下拉框",
            path: "/nested/select/select-1",
            roles:["admin","editor"],
          },
          {
            title: "树形下拉框",
            path: "/nested/select/select-2",
            roles:["admin","editor"],
          },
        ]
      },
      {
        title: "modal",
        path: "/nested/modal",
        roles:["admin","editor"],
      },
      {
        title: "toolTips",
        path: "/nested/toolTips",
        roles:["admin","editor"],
      },
    ],
  },
  {
    title: "表格",
    path: "/table",
    icon: "table",
    roles:["admin","editor"]
  },
  {
    title: "Excel",
    path: "/excel",
    icon: "file-excel",
    roles:["admin","editor"],
    children: [
      {
        title: "导出Excel",
        path: "/excel/export",
        roles:["admin","editor"]
      },
      {
        title: "上传Excel",
        path: "/excel/upload",
        roles:["admin","editor"]
      }
    ],
  },
  {
    title: "Zip",
    path: "/zip",
    icon: "file-zip",
    roles:["admin","editor"]
  },
  {
    title: "剪贴板",
    path: "/clipboard",
    icon: "copy",
    roles:["admin","editor"]
  },
  {
    title: "用户管理",
    path: "/user",
    icon: "usergroup-add",
    roles:["admin"]
  },
  {
    title: "关于作者",
    path: "/about",
    icon: "user",
    roles:["admin","editor","guest"]
  },
  {
    title: "Bug收集",
    path: "/bug",
    icon: "bug",
    roles:["admin"]
  },
];
export default menuList;
