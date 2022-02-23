import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
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
      axios
        .post('https://reqres.in/api/login', loginObj)
        .then(response => {
          if (response.status === 200) {
            commit('loginSuccess', response.data.token);
            setTimeout(() => {
              router.push({ path: '/mypage' });
            }, 1000);
          }
        })
        .catch(error => {
          commit('loginError');
        });
    },
    logout({ commit }) {
      commit('logout');
      router.push({ path: '/' });
    }
  },
  modules: {}
});
