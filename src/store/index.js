import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedYear: new Date().getFullYear(),
    years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  },
  mutations: {
    setSelectedYear: (state, year) => state.selectedYear = year
  },
  actions: {},
  modules: {}
});
