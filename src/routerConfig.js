// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideLayout from './layouts/HeaderAsideLayout';
// 小程序
import MiniApp from './pages/MiniApp';
import Monitor from './pages/Monitor';
import Workplace from './pages/Workplace';
// 活动数据
import Basic from './pages/Basic';
// 404
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
      {
        path: '/miniapp/workplace',
        layout: HeaderAsideLayout,
        component: Workplace,
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
        component: NotFound,
      },
    ],
  },
  {
    path: '/form',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      {
        path: '/form/basic',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/form/signup',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
    ],
  },
  {
    path: '/charts',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      {
        path: '/charts/line',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/charts/histogram',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/charts/bar',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
    ],
  },
  {
    path: '/profile',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      {
        path: '/profile/success',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/profile/fail',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
    ],
  },
  {
    path: '/result',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      {
        path: '/result/success',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/result/fail',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
    ],
  },
  {
    path: '*',
    layout: HeaderAsideLayout,
    component: NotFound,
  },
];

export default routerConfig;
