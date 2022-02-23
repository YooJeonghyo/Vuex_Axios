<template>
  <div>
    <h1>All Users({{ count }})</h1>
    <v-list two-line>
      <v-list-item v-for="(user, index) in UsersData" :key="user.id">
        <v-list-item-avatar color="grey lighten-3">
          <img :src="user.avatar" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-html="user.first_name"></v-list-item-title>
          <v-list-item-subtitle>id:#{{ index }} / {{ user.last_name }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  computed: {
    ...mapState(['UsersData']),
    ...mapGetters({
      count: 'getUsersCount'
    })
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(['setUsers']),
    axiosGetUsers() {
      axios
        .get('https://reqres.in/api/users?page=1')
        .then(response => {
          let userObj = response.data.data;
          this.setUsers(userObj);
        })
        .catch(error => {
          new Error(error);
        });
      axios
        .get('https://reqres.in/api/users?page=2')
        .then(response => {
          let userObj = response.data.data;
          this.setUsers(userObj);
        })
        .catch(error => {
          new Error(error);
        });
    }
  },
  mounted() {
    this.axiosGetUsers();
  }
};
</script>
