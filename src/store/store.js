import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalTvCount: 9,
    posts: {
      count: 5,
      postsArry: [
        { title: 'barge', description: 'its a barge' },
        { title: 'geisha', description: 'japanses girl' },
        { title: 'cheese', description: 'cheddar the dog' },
        { title: 'concrete', description: 'jungle lol' },
      ],
    },
  },

  getters: {
  },

  mutations: {
  },

  actions: {
  },
});
