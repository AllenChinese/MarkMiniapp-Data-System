// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideLayout from './layouts/HeaderAsideLayout';
// 小程序
import MiniApp from './pages/MiniApp';
import Monitor from './pages/Monitor';
import Workplace from './pages/Workplace';
// 活动数据
// 在线活动
import Basic from './pages/Basic';
// 待上新活动
// import Warting from './pages/Warting';
// 账户管理
// import Account from './pages/Account';
// 404
import Account from './pages/Account';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: HeaderAsideLayout,
    component: MiniApp,
    children: [
      {
        path: '/miniapp/analysis',
        layout: HeaderAsideLayout,
        component: MiniApp,
      },
      {
        path: '/miniapp/monitor',
        layout: HeaderAsideLayout,
        component: Monitor,
      },
    ],
  },
  {
    path: '/table',
    layout: HeaderAsideLayout,
    component: Basic,
    children: [
      {
        path: '/table/basic',
        layout: HeaderAsideLayout,
        component: Basic,
      },
      {
        path: '/table/warting',
        layout: HeaderAsideLayout,
        component: Basic,
      },
    ],
  },
  {
    path: '/account',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      {
        path: '/account/basic',
        layout: HeaderAsideLayout,
        component: Account,
      },
    ],
  },
  {
    path: '/account/basic',
    layout: HeaderAsideLayout,
    component: Account,
  },
  {
    path: '*',
    layout: HeaderAsideLayout,
    component: NotFound,
  },
];

export default routerConfig;
