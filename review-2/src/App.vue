<template>
  <div class="body">
    <div class="column">
      <FirstOne />
      <SecOne />
    </div>
  </div>
</template>

<script>
import FirstOne from "./components/form.vue";
import SecOne from "./components/router.vue";
export default {
  name: "App",
  components: { FirstOne, SecOne },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
