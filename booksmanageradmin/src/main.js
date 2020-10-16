import Vue from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import ElementUI from 'element-ui';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'element-ui/lib/theme-chalk/index.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
