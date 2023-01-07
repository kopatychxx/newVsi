import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView";
import AdminView from "@/views/AdminView";
import firebase from "firebase";
import TableView from "@/views/TableView";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: {
      authRequired: true,
    }
  },
  {
    path: '/table',
    name: 'table',
    component: TableView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      alert('Вам потрiбно авторизуватись');
      next({
        path: '/login',
      });
    }
  } else {
    next();
  }
});
export default router
