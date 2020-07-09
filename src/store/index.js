import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedYear: new Date().getFullYear()
  },
  mutations: {
    setSelectedYear: (state, year) => state.selectedYear = year
  },
  actions: {},
  modules: {}
});
