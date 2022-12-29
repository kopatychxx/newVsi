import Vue from 'vue'
import VueRouter from 'vue-router'
// import AdminView from "@/views/AdminView";

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView')
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   component: AdminView
  // }
]
