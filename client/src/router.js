import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Home2 from './views/Home2.vue'
import Dashboard from './views/Dashboard.vue'
import Accounts from './views/Accounts.vue'
import Details from './views/Details.vue'
import Cdr from './views/Cdr.vue'
import AddFunds from './views/AddFunds.vue'
import Revenue from './views/Revenue.vue'
import Usage from './views/Usage.vue'
import APICheck from './views/APICheck.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home2',
      component: Home2
    },
    // {
    //   path: '/home2',
    //   name: 'home2',
    //   component: Home2
    // },
    {
      path: '/APICheck',
      name: 'APICheck',
      component: APICheck
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: Accounts
    },
    {
      path: '/addfunds',
      name: 'addfunds',
      component: AddFunds
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/cdr',
      name: 'cdr',
      component: Cdr
    },
    {
      path: '/revenue',
      name: 'revenue',
      component: Revenue
    },
    {
      path: '/usage',
      name: 'usage',
      component: Usage
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
