<template>
  <div>
    <h1>SignUp</h1>
    <v-text-field label="아이디" v-model="userId"></v-text-field>
    <v-text-field label="비밀번호" type="password" v-model="password"></v-text-field>
    <v-text-field label="성" v-model="last_name"></v-text-field>
    <v-text-field label="이름" v-model="first_name"></v-text-field>
    <v-text-field label="이메일" v-model="email"></v-text-field>
    <v-text-field label="이미지" v-model="avatar"></v-text-field>
    <v-btn @click="signUp">회원가입</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      userId: null,
      password: null,
      first_name: null,
      last_name: null,
      email: null,
      avatar: null
    };
  },
  methods: {
    ...mapActions(['addUsers']),
    signUp() {
      let userObj = {
        userId: this.userId,
        password: this.password,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        avartar: this.avartar
      };
      this.addUsers(userObj);
      this.clearForm();
    },
    clearForm() {
      this.userId = null;
      this.password = null;
      this.first_name = null;
      this.last_name = null;
      this.email = null;
      this.avatar = null;
    }
  }
};
</script>
