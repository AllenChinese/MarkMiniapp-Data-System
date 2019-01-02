import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import './styles/index.scss';
import App from './App.vue';
import router from './router';

Vue.use(ElementUI);

Vue.config.productionTip = false;

// 路由拦截
router.beforeEach((to, from, next) => {
  // token 是否过期验证
  // console.log(to)
  // console.log(to.meta.requireAuth)
  if (to.meta.requireAuth) { // 该路由是否需要登录
    if (window.localStorage.isLogined === 'true') {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
