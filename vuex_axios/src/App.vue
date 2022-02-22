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
                <v-icon>mdi-email</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>회원관리</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ path: '/about' }">
              <v-list-item-action>
                <v-icon>mdi-dog</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>about</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="indigo" dark>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>Application</v-toolbar-title>
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
export default {
  data() {
    return {
      drawer: null,
      items: [
        {
          title: 'home',
          to: '/'
        },
        {
          title: 'about',
          to: '/about'
        },
        {
          title: 'users',
          to: '/users'
        }
      ]
    };
  },
  props: {
    source: String
  }
};
</script>
