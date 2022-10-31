<script lang="ts">
import { defineComponent, PropType, reactive, ref } from "vue";
import BoxContent from "./BoxContent.vue";
import Box from "@/types/Box";

export default defineComponent({
  components: { BoxContent },
  setup() {
    const pic = ref<Box[]>([
      {
        id: 1,
        name: "X'mas Pack",
        unit: "NT$",
        price: 120,
        details: "flavor tend sweety, fits to teeanger",
        img_url: "./picture/IMG_6569.PNG",
      },
      {
        id: 2,
        name: "Snow Man",
        unit: "NT$",
        price: 120,
        details: "flavor tend sweety, fits to teeanger",
        img_url: "./picture/IMG_6570.PNG",
      },
      {
        id: 3,
        name: "Santa Hat",
        unit: "NT$",
        price: 120,
        details: "flavor tend sweety, fits to teeanger",
        img_url: "./picture/IMG_6571.PNG",
      },
      {
        id: 4,
        name: "Chritsmas Tree",
        unit: "NT$",
        price: 120,
        details: "flavor tend sweety, fits to teeanger",
        img_url: "./picture/IMG_6572.PNG",
      },
      {
        id: 5,
        name: "Reindeer Puff",
        unit: "NT$",
        price: 120,
        details: "flavor tend sweety, fits to teeanger",
        img_url: "./picture/IMG_6573.PNG",
      },
      {
        id: 6,
        name: "Christmas Box",
        unit: "NT$",
        price: 120,
        details: "flavor tend sweety, fits to teeanger",
        img_url: "./picture/IMG_6574.PNG",
      },
    ]);
    return { pic };
  },
});
</script>

<template>
  <div class="cards-body">
    <ul class="cards">
      <li class="cards_item" v-for="image in pic" :key="image.id">
        <div class="card">
          <div class="card_image">
            <img :src="image.img_url" />
          </div>

          <BoxContent>
            <template v-slot:boxcontent>
              <div>
                <div class="card_content">
                  <h2 class="card_title">{{ image.name }}</h2>
                  <h3>{{ image.unit }} {{ image.price }}</h3>

                  <p class="card_text">
                    {{ image.details }}
                  </p>
                  <button class="btn">Add To Cart</button>
                </div>
              </div>
            </template>
          </BoxContent>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.cards-body {
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  width: 80%;
  height: 100%;
}
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
