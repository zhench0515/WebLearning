// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/JS/jquery'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import 'font-awesome-webpack'

// 轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// 分页
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)

// axios
import axios from 'axios'
Vue.prototype.$axios = axios;

// vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);


Vue.config.productionTip = false
Vue.config.debug=true
window.log=console.log

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: { App }
  render:h=>h(App)
})
