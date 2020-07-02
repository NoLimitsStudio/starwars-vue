import Vue from "vue";
import Vuex from "vuex";

// modules
import planets from "./planets";

// constants
const url = "https://swapi.dev/api/";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imageUrl: "https://starwars-visualguide.com/assets/img/",
    error: null,
    selectedItem: null,
    data: null
  },
  mutations: {
    SET_ERROR(state, err) {
      state.error = err;
    },
    SET_SELECTED(state, data) {
      state.selectedItem = data;
    },
    SET_DATA(state, data) {
      state.data = data;
    }
  },
  actions: {
    async changeSelected({ commit }, data) {
      const res = await fetch(`${url}${data.param}/${data.id}`);
      const result = await res.json();
      result.id = data.id;
      commit("SET_SELECTED", result);
    },
    async loadItems({ commit }, param) {
      const res = await fetch(`${url}${param}/`);
      const data = await res.json();
      commit("SET_DATA", data);
    },
    clearSelected({ commit }) {
      commit("SET_SELECTED", null);
    }
  },
  getters: {},
  modules: {
    planets
  }
});
