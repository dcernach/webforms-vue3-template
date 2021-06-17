<template>
  <p class="page-info" v-if="info">{{ info }}</p>
  <h2>Welcome to Page1 Component</h2>
</template>

<script>
export default {
  name: 'Page1.vue',
  props: ['info'],
};
</script>

<style scoped>
h2 {
  color: chocolate;
}
</style>
