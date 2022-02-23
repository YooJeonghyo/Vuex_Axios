<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Vuex를 활용한 테스트 웹페이지 구현</h1>
        <br />
        <p class="subheading font-weight-regular">Vuex의 기능 state, getters, mutations, actions 을 활용하여 구현하였습니다.</p>
        <br />
        <p class="subheading font-weight-regular">reqres.in 에서 제공하는 서버 api의 더미 데이터를 사용하였습니다.</p>
        <br />
        <p class="subheading font-weight-regular">'회원관리' 페이지와 '로그인' 페이지는 서로 연동되지 않는 전혀 다른 기능을 구현합니다.</p>
        <br />
        <p class="subheading font-weight-regular">로그인 계정 [ email: eve.holt@reqres.in / password: cityslicka ]</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
