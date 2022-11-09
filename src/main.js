import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCarousel from 'vue-carousel';
import VueScrollTo from 'vue-scrollto'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
Vue.use(VueScrollTo)
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
