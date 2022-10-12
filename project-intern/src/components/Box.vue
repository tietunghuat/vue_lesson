<template>
  <div class="cards-body">
    <Box :products="item"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive,ref } from "vue";
import Box from "./BoxContent.vue"
import BoxItem from "@/types/Box";

export default defineComponent({
  components:{Box},
  setup(){
    const item = ref<BoxItem[]>([
        {id:1,name:"X'mas Pack",unit:"NT$",price:120,details:"flavor tend sweety, fits to teeanger",img_url:"./picture/IMG_6569.PNG"},
        {id:2,name:"Snow Man",unit:"NT$",price:39,details:"flavor tend sweety, fits to teeanger",img_url:"./picture/IMG_6570.PNG"},
        {id:3,name:"Santa Hat",unit:"NT$",price:39,details:"flavor tend sweety, fits to teeanger",img_url:"./picture/IMG_6571.PNG"},
        {id:4,name:"Chritsmas Tree",unit:"NT$",price:39,details:"flavor tend sweety, fits to teeanger",img_url:"./picture/IMG_6572.PNG"},
        {id:5,name:"Reindeer Puff",unit:"NT$",price:39,details:"flavor tend sweety, fits to teeanger",img_url:"./picture/IMG_6573.PNG"},
        {id:6,name:"Christmas Box",unit:"NT$",price:39,details:"flavor tend sweety, fits to teeanger",img_url:"./picture/IMG_6574.PNG"}
    ]);
    return {item};
  }
})
  // setup(props) {
  //   let url = window.location.protocol + "//" + window.location.host;
  //   const imagesArr = reactive([
  //     { id: 1, image_path: url + "/picture/IMG_6571.PNG" },
  //     { id: 2, image_path: url + "/picture/IMG_6571.PNG" },
  //     { id: 3, image_path: url + "/picture/IMG_6571.PNG" },
  //     { id: 4, image_path: url + "/picture/IMG_6571.PNG" },
  //     { id: 5, image_path: url + "/picture/IMG_6571.PNG" },
  //   ]);

  //   return { imagesArr };
  // },
</script>



<style scoped>
.cards-body
{
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  width: 80%;
  height: 100%;
}
</style>
