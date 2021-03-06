// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index.js'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper /* { default options with global component } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { App: App },
  template: '<App/>'
})

// 路由就是根据网址的不同，返回不同的内容给用户
