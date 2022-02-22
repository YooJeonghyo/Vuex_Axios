<template>
  <div>
    <h1>All Users</h1>
    <v-list two-line>
      <v-list-item v-for="(user, index) in allUsers" :key="index">
        <v-list-item-avatar color="grey lighten-3">
          <img :src="user.src" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-html="user.name"></v-list-item-title>
          <v-list-item-subtitle>id:#{{ index }} / {{ user.address }} 거주</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { EventBus } from '@/main.js';

export default {
  data() {
    return {
      allUsers: [
        { userId: 'test1', password: '123', name: 'test1', address: 'Seoul', src: 'https://octodex.github.com/images/yogitocat.png' },
        { userId: 'yjh', password: '456', name: 'yjh', address: 'Berlin', src: 'https://octodex.github.com/images/Fintechtocat.png' },
        { userId: 'vuex', password: '789', name: 'vuex', address: 'Busan', src: 'https://octodex.github.com/images/boxertocat_octodex.jpg' }
      ]
    };
  },
  mounted() {
    EventBus.$on('signUp', users => {
      this.allUsers.push(users);
    });
  }
};
</script>
