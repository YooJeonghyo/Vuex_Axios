<template>
  <div>
    <h1>All Users({{ count }})</h1>
    <h3>서울 거주자 : {{ seouls }} 명 ({{ percent }}%)</h3>
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
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['allUsers']),
    ...mapGetters({
      count: 'getUsersCount',
      seouls: 'countOfSeoul',
      percent: 'percentOfSeoul'
    })
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>
