import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Checkin from './views/Checkin.vue'
import Pool from './views/Pool.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/checkin',
      name: 'checkin',
      component: Checkin
    },
    {
      path: '/pool',
      name: 'pool',
      component: Pool
    }
  ]
})
