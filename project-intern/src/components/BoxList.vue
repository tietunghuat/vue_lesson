<template>
  <div class="Multi-Box">
    
    <BoxContent/>

  </div>

</template>

<script lang="ts">
import { defineComponent ,ref} from "vue";
import BoxContent from "./Box.vue";
export default defineComponent({
    components:{
    BoxContent
}
})
</script>

<style scoped>
.Multi-Box {
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: 26%;
}
</style>
