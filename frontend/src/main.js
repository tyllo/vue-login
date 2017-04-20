import Vue from 'vue'
import '@/utils/class-component-hooks'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = process.env !== 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
