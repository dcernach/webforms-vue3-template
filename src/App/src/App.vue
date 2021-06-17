<template>
  <p class="page-info" v-if="info">{{ info }}</p>
  <img alt="Vue logo" src="@/assets/logo.png">
  <Hello msg="Welcome to [ASP.Net Web Forms] with Vue.js 3.0 Template"/>
</template>

<script>
import Hello from '@/components/Hello.vue';

export default {
  name: 'Home',
  props: ['info'],
  components: {
    Hello,
  },
};
</script>

<style lang="scss">
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
