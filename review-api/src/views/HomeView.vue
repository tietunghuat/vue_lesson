<template>
  <div class="home">
    <h1>Home</h1>
    <h1>Ref</h1>
    <!-- <h2 ref="aa">My name is {{ name }} and age is {{ age }}</h2> -->
    <h2>My name is {{ personOne.name }} and age is {{ personOne.age }}</h2>
    <input type="text" v-model="personOne.name" />
    <button @click="handleClick">Click me</button>
    <button @click="personOne.age++">Age ++</button>

    <h1>Reactive</h1>
    <h2>{{ personTwo.name }}</h2>
    <button @click="handleClick2">Click me reactive</button>
  </div>
</template>

<script>
// @ is an alias to /src

//we only use value property in setup function
import { ref, reactive } from "vue";
export default {
  name: "HomeView",
  setup() {
    console.log("setup");

    const personOne = ref({ name: "mario", age: 30 });
    const personTwo = reactive({ name: "mario", age: 30 });
    // const aa = ref(null);
    // console.log(aa, aa.value);

    const handleClick = () => {
      // aa.value.classList.add("test");
      // // aa.value.textContent = "hello everyone!";+
      // name = "lucy";
      // name.value = "lucy"; //ref
      // age.value = 35;  //ref
      personOne.value.age = 40;
      personOne.value.name = "Lucy";
    };
    const handleClick2 = () => {
      // aa.value.classList.add("test");
      // // aa.value.textContent = "hello everyone!";+
      // name = "lucy";
      // name.value = "lucy"; //ref
      // age.value = 35;  //ref
      personTwo.name = "mushroom";
      personTwo.age = 100; //ref需要value property,reactive不需要value property
      //reactive is primities value 他是原始碼 比較難改
      //建議使用ref 雖然比較麻煩
    };
    return { personOne, handleClick, personTwo, handleClick2 };
  },
};
</script>

<style scoped>
.test {
  font-size: larger;
  font-weight: bolder;
  background-color: blueviolet;
  color: white;
}
</style>
