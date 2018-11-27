import Vue from 'vue'

//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import vurResource from 'vue-resource'
Vue.use(vurResource)
//引入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.config.productionTip = false

import App from './App.vue'

//导入子的router.js路由模块
import router from './router'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render : c => c(App)
})
