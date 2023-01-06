import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app';
import "firebase/firestore";
import VueCarousel from 'vue-carousel';
import VueScrollTo from 'vue-scrollto'
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as VueGoogleMaps from "vue2-google-maps";
import VueTheMask from 'vue-the-mask'
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

const firebaseConfig = {
  apiKey: "AIzaSyDBPzqY45ecFXlx6pJfdupVa62kmhq9_sc",
  authDomain: "vsi-svoi-c8027.firebaseapp.com",
  databaseURL: "https://vsi-svoi-c8027-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vsi-svoi-c8027",
  storageBucket: "vsi-svoi-c8027.appspot.com",
  messagingSenderId: "746253024276",
  appId: "1:746253024276:web:b0103122c47626f9b87b01",
  measurementId: "G-4MNZDRY0GC"
};
firebase.initializeApp(firebaseConfig);
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
