<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="'https://octodex.github.com/images/boxertocat_octodex.jpg'" class="my-3" contain height="200" />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">사용자님 반갑습니다!</h1>
        <br />
        <br />
        <br />
        <br />
        <p class="subheading font-weight-regular">로그인에 성공하였습니다.</p>
        <br />
        <p class="subheading font-weight-regular">당신의 토큰은 '{{ userInfo }}' 입니다. 엄청 중요한거에요!</p>
        <br />
        <p class="subheading font-weight-regular">사실 서버에서 들어오는 정보가 토큰 정보밖에 없어요😎</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['userInfo'])
  }
};
</script>
