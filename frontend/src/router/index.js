import Vue from 'vue'
import Router from 'vue-router'
import authRoute from './auth'
import staticRoute from './static'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  mode: 'history',
  routes: [
    authRoute,
    staticRoute,
  ],
})
