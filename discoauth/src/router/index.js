import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import redirectURI from '../views/redirectURI.vue'
import twitchRedirectURI from '../views/twitchRedirectURI.vue'
import done from '../views/done.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // TODO: split code out of this URL since discord sends the '?' on the wrong side than vue router wants it
    path: '/discord',
    name: 'Discord',
    component: redirectURI,
  },
  {
    path: '/twitch',
    name: 'Twitch',
    component: twitchRedirectURI
  },
  {
    path: '/done',
    name: 'done',
    component: done
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
