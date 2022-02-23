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
    UsersData: [],
    isLogin: false,
    isLoginError: false
  },
  getters: {
    getUsersCount: state => {
      return state.UsersData.length;
    }
  },
  mutations: {
    addUsers: (state, payload) => {
      state.UsersData.push(payload);
    },
    setUsers(state, payload) {
      state.UsersData.push(...payload);
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
    setUsers: ({ commit }, payload) => {
      commit('setUsers', payload);
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
