import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js';
// main.js 에 Element ui 사용을 정의.
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI); // 사용

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')