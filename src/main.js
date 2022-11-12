import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCarousel from 'vue-carousel';
import VueScrollTo from 'vue-scrollto'
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as VueGoogleMaps from "vue2-google-maps";
import VueTheMask from 'vue-the-mask'
import VueMeta from 'vue-meta'

AOS.init();
Vue.use(VueScrollTo)
Vue.use(VueCarousel);
Vue.use(VueMeta)
Vue.use(VueTheMask)

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBNzdjgEnPbM0eHZU5lJTorXKrxNSQugsY",
    libraries: "places",
  },
});
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
