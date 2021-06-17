<template>
  <p class="page-info" v-if="info">{{ info }}</p>
  <h2>Welcome to Page2 Component</h2>
  <div class="center">Count</div>
  <div class="center">{{ count }}</div>
  <div class="center">
    <button @click.prevent="add">Add *2</button>
  </div>
</template>

<script>
export default {
  name: 'Page2.vue',
  props: ['info'],
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    add() {
      this.count *= 2;
    },
  },
};
</script>

<style scoped>
h2 {
  color: crimson;
}

.center {
  text-align: center;
  padding: .5em;
}
</style>
