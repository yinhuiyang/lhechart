import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: "莲塘街道",
  },
  mutations: {
    setName(state, val) {
      state.name = val;
    },
  },
  actions: {},
  modules: {},
  getters,
});
export default store;
