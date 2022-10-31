<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import BoxItem from "@/types/Box";

export default defineComponent({
  // props: {
  //   products: {
  //     required: true,
  //     type: Array as PropType<BoxItem[]>,
  //   },
  // }
  setup() {},
});
</script>
<template>
  <slot name="boxcontent"> </slot>
</template>

<style scoped>
.btn {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  width: 60%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  text-align: center;
  align-items: center;
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
}

.cards_item {
  text-align: center;
  align-items: center;
  padding: 1rem;
}

.card_image img {
  width: 240px;
  height: 250px;
  text-align: center;
  align-items: center;
  padding: 0px;
}

.card {
  background-color: white;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  text-align: center;
  align-items: center;
}

.card_content {
  position: relative;
  max-height: 1100px;
  width: 100%;
  background: rgba(5, 5, 5, 0.829);
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card_title {
  color: #ffffff;
  font-size: 1.1rem;
  letter-spacing: 1.8px;
  text-transform: capitalize;
  margin: 0;
  padding: 10px 0 3px 0;
}

.card_text {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
h3 {
  color: #ffffff;
  font-size: 50px;
  margin: 0;
}

ul {
  list-style-type: none;
}
</style>
