import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },

  getters: {
  },

  mutations: {
    addPostDetails(state, postDetails) {
      Vue.set(state, 'posts', [...postDetails]);
    },
  },

  actions: {
  },
});
