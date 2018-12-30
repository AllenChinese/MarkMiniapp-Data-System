// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [];

const asideMenuConfig = [
  {
    path: '/miniapp',
    name: '小程序',
    icon: 'el-icon-menu',
    children: [
      {
        path: '/monitor',
        name: '监控页',
      },
      {
        path: '/analysis',
        name: '分析页',
      }
    ],
  },
  {
    path: '/table',
    name: '活动数据',
    icon: 'el-icon-date',
    children: [
      {
        path: '/basic',
        name: '在线活动',
      },
      {
        path: '/warting',
        name: '待上新活动',
      },
    ],
  },
  {
    path: '/form',
    name: '账户管理',
    icon: 'el-icon-edit-outline',
    children: [
      {
        path: '/basic',
        name: '账户管理',
      }
    ],
  }
];

export { headerMenuConfig, asideMenuConfig };
