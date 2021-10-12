import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registration from '../views/Registration.vue'
import Profile from '../views/Profile.vue'
import NewEpisode from '../views/NewEpisode.vue'
import VaccinationHistory from '../views/VaccinationHistory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/new-episode',
    name: 'NewEpisode',
    component: NewEpisode
  },
  {
    path: '/vaccination-history',
    name: 'VaccinationHistory',
    component: VaccinationHistory
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
