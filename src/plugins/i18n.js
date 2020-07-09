import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

import {getLanguageFromLocalStorage} from "../utils/pureFunctions";
import messages from "../langs";

export default new VueI18n({
  locale: getLanguageFromLocalStorage() || 'ru',
  messages
})
