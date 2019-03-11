// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './styles/common.css'
import 'mint-ui/lib/style.css'
import Common from './utils/common'

Vue.config.productionTip = false

Vue.prototype.$common = new Common()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
