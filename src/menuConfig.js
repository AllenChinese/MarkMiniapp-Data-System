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
      },
      {
        path: '/workplace',
        name: '工作台',
      },
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
    name: '表单页',
    icon: 'el-icon-edit-outline',
    children: [
      {
        path: '/basic',
        name: '典型表单',
      },
      {
        path: '/signup',
        name: '注册表单',
      },
    ],
  },
  {
    path: '/charts',
    name: '图表页',
    icon: 'el-icon-picture-outline',
    children: [
      {
        path: '/line',
        name: '折线图',
      },
      {
        path: '/histogram',
        name: '柱状图',
      },
      {
        path: '/bar',
        name: '条形图',
      },
    ],
  },
  {
    path: '/profile',
    name: '详情页',
    icon: 'el-icon-tickets',
    children: [
      {
        path: '/success',
        name: '基础详情页',
      },
      {
        path: '/fail',
        name: '失败',
      },
    ],
  },
  {
    path: '/result',
    name: '结果页',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/success',
        name: '成功',
      },
      {
        path: '/fail',
        name: '失败',
      },
    ],
  }
];

export { headerMenuConfig, asideMenuConfig };
