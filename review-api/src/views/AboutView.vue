<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="search" />

    <div v-for="name in searchName" :key="name.id">
      <p>My name is {{ name }}</p>
    </div>
    <button @click="stop">Stop</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";

export default {
  name: "About",
  setup() {
    const search = ref("");
    const names = ref(["mario", "kd", "ad", "LBJ", "steph", "jayson"]);

    // watch(search, () => {
    //   console.log("watch function ran");
    // });

    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    // watchEffect(() => {
    //   console.log("watcheffect function ran", search.value);
    // });

    const stopEffect = watchEffect(() => {
      console.log("watcheffect function ran", search.value);
    });

    const searchName = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    const stop = () => {
      stopWatch();
      stopEffect();
    };

    return { names, search, searchName, stop };
  },
};
</script>
