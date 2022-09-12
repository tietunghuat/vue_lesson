<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App!!" />

    <div id="home1">
      <textarea class="ii1" placeholder="Show Here...."></textarea>
    </div>
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "HomeView",
  components: { HelloWorld }
};
</script>

<style>
textarea {
  width: 250px;
  height: 350px;
  border: grey 1px solid;
  margin-bottom: 15px;
}
input{
  width:250px
}
</style>