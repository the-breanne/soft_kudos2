import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../components/UserCreate')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/UserList')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/UserEdit')
  },
  {
    path: '/meeting',
    name: 'meeting',
    component: () => import('../components/Meeting')
  },
  {
    path: '/meetinglist',
    name: 'meetinglist',
    component: () => import('../components/MeetingList')
  },
  {
    path: '/meetingedit/:id',
    name: 'meetingedit',
    component: () => import('../components/MeetingEdit')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router