<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title> 타이틀 </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to">
        <v-list-item-content>
          {{ item.title }}
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app color="indigo" dark absolute>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
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
