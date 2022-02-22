import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      { userId: 'test1', password: '123', name: 'test1', address: 'Seoul', src: 'https://octodex.github.com/images/yogitocat.png' },
      { userId: 'yjh', password: '456', name: 'yjh', address: 'Berlin', src: 'https://octodex.github.com/images/Fintechtocat.png' },
      { userId: 'vuex', password: '789', name: 'vuex', address: 'Busan', src: 'https://octodex.github.com/images/boxertocat_octodex.jpg' }
    ]
  },
  getters: {
    getUsersCount: state => {
      return state.allUsers.length;
    },
    countOfSeoul: state => {
      let count = 0;
      state.allUsers.forEach(user => {
        if (user.address == 'Seoul') count++;
      });
      return count;
    },
    percentOfSeoul: (state, getters) => {
      return Math.round((getters.countOfSeoul / getters.getUsersCount) * 100);
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
