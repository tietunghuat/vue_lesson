<template>
  
  <HelloWorld :title_message="bla" :pav="cla" theme="sale"/>
  <div class="first" v-if="showme">
  <!-- <HelloWorld title_message="Welcome to Your Vue.js App"/>
  <HelloWorld pav="Beverly said that bron's highlight is the block on his face!" /> -->
  <Nohell :team="heihei" :allstar="xixi">
  <template v-slot:links>
    <a href="#" > lets go</a>
  </template>
  <p>lets gooooo everyone</p>
   
  </Nohell>
  
  </div>
  <button @click.ctrl="openmodal()">On(press ctrl+left click)</button>
  <button @click="closemodal()">off</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nohell from './components/Nohello.vue'

export default {
    name:"App",
    components: {
    HelloWorld,Nohell
},
  data(){
    return{
      bla:"Look how nice is it",
      cla:"NBA 75 stars!",
      heihei:"Cavs,GSW,LOS",
      xixi:"KD,James,Curry",
      showme:false
    }
  },
  methods:{
    openmodal(){
      this.showme = true
    },
    closemodal(){
      this.showme= false
    }
  }
}
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
