// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import Global from '../static/Global/Global.css'
import common from '../static/common.css'
import axios from 'axios'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.router = router

/* eslint-disable no-new */
new Vue({
  el: '#app',
  Global,
  common,
  router,
  components: { App },
  template: '<App/>'
})
