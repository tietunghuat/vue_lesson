<template>
  <div class="app">
    <!-- <p>{{name}} = {{age}}</p>
  <button @click="change('Hello')">Change name</button>
  <button @click="changeage(30)">Change age</button> -->

  <!-- <p>{{face[0].name}}</p> -->
  <button @click="handleClick('id')">order by id</button>
  <button @click="handleClick('name')">order by name</button>
  <button @click="handleClick('age')">order by age</button>
  <itemList :facela="face" :orders="order"/>
  </div>
  
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs,ref } from 'vue';
import facehere from "./types/face"
import itemList from "./components/itemList.vue"
import orderFace from "./types/orderFace"

export default defineComponent({
  name: 'App',
  components: {itemList},
  // setup(){
  //  const state = reactive({
  //   name:"hihihi",
  //   age:25 as number | string

  //  })
  //  state.name="hahaha",
  //  state.age=33
  //  return {...toRefs(state)}
   
  // },
  // setup(){
  //   const name=ref("link")
  //   const age=ref<string|number>(39)
  //   return {name,age}
  // },,
  setup(){
    const face=ref<facehere[]>([
      {id:1,name:"King",age:23,over_age:true},
  {id:2,name:"Kingaa",age:26,over_age:true}
])
const order=ref<orderFace>("name")
  const handleClick =(tem:orderFace)=>{
    order.value=tem
  }
  return {face,handleClick,order}
  }
//   ,
//   methods:{
//     change(name:string){  
//       this.name= name;

//     },
//     changeage(age:string | number){
//       this.age=age;
//     }
//   }
});

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
