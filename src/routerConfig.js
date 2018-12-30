// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
// 布局一
import HeaderAsideLayout from './layouts/HeaderAsideLayout';
// 布局二
import EmptyLayout from './layouts/EmptyLayout';
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
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: HeaderAsideLayout,
    component: MiniApp,
    name: 'miniapp',
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '/miniapp/analysis',
        layout: HeaderAsideLayout,
        component: MiniApp,
        name: 'analysis',
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/miniapp/monitor',
        layout: HeaderAsideLayout,
        component: Monitor,
        name: 'monitor',
        meta: {
          requireAuth: true
        }
      },
    ],
  },
  {
    path: '/table',
    layout: HeaderAsideLayout,
    component: Basic,
    name: 'table',
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '/table/basic',
        layout: HeaderAsideLayout,
        component: Basic,
        name: 'tableBasic',
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/table/warting',
        layout: HeaderAsideLayout,
        component: Basic,
        name: 'tableWarting',
        meta: {
          requireAuth: true
        }
      },
    ],
  },
  {
    path: '/account',
    layout: HeaderAsideLayout,
    component: Account,
    name: 'account',
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '/account/basic',
        layout: HeaderAsideLayout,
        component: Account,
        name: 'accountBasic',
        meta: {
          requireAuth: true
        }
      },
    ],
  },
  {
    path: '/Login',
    layout: EmptyLayout,
    component: Login,
    name: 'login'
  },
  {
    path: '*',
    layout: EmptyLayout,
    component: NotFound,
  },
];

export default routerConfig;
