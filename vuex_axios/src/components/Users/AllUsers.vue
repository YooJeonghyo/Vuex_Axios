<template>
  <div>
    <h1>All Users</h1>
    <v-list two-line>
      <v-list-item v-for="(user, index) in getAllUsers" :key="index">
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
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getAllUsers'])
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>
