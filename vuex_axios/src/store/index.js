import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      { id: 1, name: 'test1', email: 'test1@gmail.com', password: '123456' },
      { id: 2, name: 'ex1', email: 'ex1@gmail.com', password: '123456' }
    ],
    testAllUsers: [
      { userId: 'test1', password: '123', name: 'test1', address: 'Seoul', src: 'https://octodex.github.com/images/yogitocat.png' },
      { userId: 'yjh', password: '456', name: 'yjh', address: 'Berlin', src: 'https://octodex.github.com/images/Fintechtocat.png' },
      { userId: 'vuex', password: '789', name: 'vuex', address: 'Busan', src: 'https://octodex.github.com/images/boxertocat_octodex.jpg' }
    ],
    isLogin: false,
    isLoginError: false
  },
  getters: {
    getUsersCount: state => {
      return state.testAllUsers.length;
    },
    countOfSeoul: state => {
      let count = 0;
      state.testAllUsers.forEach(user => {
        if (user.address === 'Seoul') count++;
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
      state.testAllUsers.push(payload);
    },
    // 로그인이 성공했을 때,
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    // 로그인이 실패했을 때
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    }
  },
  actions: {
    addUsers: ({ commit }, payload) => {
      commit('addUsers', payload);
    },
    //로그인 시도
    login({ state, commit }, loginObj) {
      let selectedUser = null;
      state.allUsers.forEach(user => {
        if (user.email === loginObj.email) selectedUser = user;
      });
      if (selectedUser === null || selectedUser.password !== loginObj.password) commit('loginError');
      else {
        commit('loginSuccess', selectedUser);
        setTimeout(() => {
          router.push({ path: '/mypage' });
        }, 1000);
      }
    },
    logout({ commit }) {
      commit('logout');
      router.push({ path: '/' });
    }
  },
  modules: {}
});
