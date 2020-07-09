import Vue from "vue";
import App from "./App.vue";
import {i18n} from './plugins/i18n'
import FlagIcon from 'vue-flag-icon'
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import "./assets/scss/style.scss";
import "./assets/scss/media.scss";
import vueCustomScrollbar from 'vue-custom-scrollbar';
import VImageInput from "vuetify-image-input";
import VueI18n from "vue-i18n";
import {getLanguageFromLocalStorage} from "./utils/pureFunctions";
Vue.use(VueI18n)
import messages from './messages'

const i18n = new VueI18n({
  locale: getLanguageFromLocalStorage() || 'ru',
  messages
})
Vue.component('VImageInput', VImageInput);

Vue.use(Vuelidate)
Vue.use(FlagIcon)
Vue.use(vueCustomScrollbar)

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
