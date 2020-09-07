import Vue from 'vue';
// 引入axios组件
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

// 跨域保存session有用
axios.defaults.withCredentials = true;

// 打包的时候直接删掉，默认基础路径在这里配置
axios.defaults.baseURL = 'http://localhost:3000';

// 将 axios 赋值给 Vue，方便在子组件里面使用
Vue.prototype.$axios = axios;
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
