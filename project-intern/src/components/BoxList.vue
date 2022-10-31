<script lang="ts">
import { defineComponent, ref } from "vue";
import Box from "./Box.vue";
export default defineComponent({
  components: {
    Box,
  },
});
</script>

<template>
  <div class="Multi-Box">
    <Box />
  </div>
</template>

<style scoped>
.Multi-Box {
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: 26%;
}
</style>
