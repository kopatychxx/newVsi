import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import { routes } from "./router";
import store from './store'
import vuetify from './plugins/vuetify'
import VueCarousel from 'vue-carousel';
import VueScrollTo from 'vue-scrollto'
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as VueGoogleMaps from "vue2-google-maps";
import VueTheMask from 'vue-the-mask'
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueScrollTo)
Vue.use(VueCarousel);
Vue.use(VueMeta)
Vue.use(VueTheMask)

Vue.use(Router);
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

new Vue({ router, render: h => h(App) }).$mount('#app');


AOS.init();

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCtOTe_lUYdqMDp9fAbAXhLF0fKohinoVo",
    libraries: "places",
  },
});
new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
