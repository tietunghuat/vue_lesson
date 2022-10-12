<template>
  <div class="main">
    <BoxList />
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";
import BoxList from "./components/BoxList.vue";


export default defineComponent({
  name: "App",
  components: { BoxList },
  
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-items: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
body{
  margin: 0;
  padding: 0;
  background-color: #241E15;
  
}
</style>
