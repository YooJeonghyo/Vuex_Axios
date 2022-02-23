<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
          <v-list dense>
            <v-list-item :to="{ path: '/' }">
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ path: '/users' }">
              <v-list-item-action>
                <v-icon>mdi-test-tube</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>회원관리</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="isLogin === false" :to="{ path: '/login' }">
              <v-list-item-action>
                <v-icon>mdi-login</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>로그인</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-else :to="{ path: '/mypage' }">
              <v-list-item-action>
                <v-icon>mdi-dog</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>내정보</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="indigo" dark>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>YJH Vuex Study Web</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-menu offset-y v-if="isLogin">
              <template v-slot:activator="{ on, attrs }">
                <v-btn text icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item :to="{ path: '/mypage' }">
                  <v-list-item-title>마이페이지</v-list-item-title>
                </v-list-item>
                <v-list-item @click="logout">
                  <v-list-item-title>로그아웃</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-btn text v-else :to="{ path: '/login' }">로그인</v-btn>
          </v-toolbar-items>
        </v-app-bar>
        <v-main>
          <router-view />
        </v-main>
        <v-footer color="indigo" app>
          <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState(['isLogin'])
  },
  data() {
    return {
      drawer: null
    };
  },
  methods: {
    ...mapActions(['logout'])
  }
};
</script>
