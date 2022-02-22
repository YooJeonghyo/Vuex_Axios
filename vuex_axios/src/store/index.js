import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      { userId: 'test1', password: '123', name: 'test1', address: 'Seoul', src: 'https://octodex.github.com/images/yogitocat.png' },
      { userId: 'yjh', password: '456', name: 'yjh', address: 'Berlin', src: 'https://octodex.github.com/images/Fintechtocat.png' },
      { userId: 'vuex', password: '789', name: 'vuex', address: 'Busan', src: 'https://octodex.github.com/images/boxertocat_octodex.jpg' }
    ],
    isLogin: false
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
      //getters의 데이터가 state를 참조하기 때문에 파라미터로 넣어주어야함
      return Math.round((getters.countOfSeoul / getters.getUsersCount) * 100);
    }
  },
  mutations: {
    addUsers: (state, payload) => {
      state.allUsers.push(payload);
    }
  },
  actions: {
    addUsers: ({ commit }, payload) => {
      commit('addUsers', payload);
    }
  },
  modules: {}
});
