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
import Vuelidate from 'vuelidate'
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)
Vue.use(Vuelidate)

AOS.init();
Vue.use(VueScrollTo)
Vue.use(VueCarousel);
Vue.use(VueMeta)
Vue.use(VueTheMask)

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCtOTe_lUYdqMDp9fAbAXhLF0fKohinoVo",
    libraries: "places",
  },
});
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
