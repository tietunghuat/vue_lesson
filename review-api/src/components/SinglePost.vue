<template>
  <!-- <span>#{{ posta.tags }}</span> -->
  <div class="body">
    <router-link :to="{ name: 'details', params: { id: posta.id } }">
      <h1>{{ posta.title }}</h1>
    </router-link>

    <h1>{{ sniper }}</h1>
  </div>
  <span v-for="tag in posta.tags" :key="tag.id"> #{{ tag }}</span>
</template>

<script>
  import { computed } from "vue";
  export default {
    name: "SinglePost",
    props: ["posta"],
    setup(props) {
      const sniper = computed(() => {
        return props.posta.body.substring(0, 23) + "....";
      });
      return { sniper };
    },
  };
</script>

<style>
  .red {
    color: brown;
  }
</style>
