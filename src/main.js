import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/';
import axios from 'axios';  
axios.defaults.headers.post['Content-type'] = 'application/json';
Vue.prototype.$ajax = axios

Vue.config.productionTip = false;
// 公共样式
import "./assets/css/base.css";
import "./assets/css/common.css";
import "./assets/font/iconfont.css";
// vant组件库
// $cnpm i vant -S
import vant from "vant";
import "vant/lib/index.css";
Vue.use(vant);
// 插件
// cnpm i swiper -S
import "swiper/css/swiper.min.css";


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
