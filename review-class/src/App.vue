<template>
  <HelloWorld :title_message="bla" :pav="cla" theme="sale" />
  <teleport to=".modals" v-if="showme"
    ><!--teleport去哪裡都可以，指定好就好-->
    <!-- <HelloWorld title_message="Welcome to Your Vue.js App"/>
    <HelloWorld pav="Beverly said that bron's highlight is the block on his face!" /> -->
    <Nohell :team="heihei" :allstar="xixi">
      <p>lets gooooo everyone</p>

      <template v-slot:links>
        <a href="#"> lets go!!!</a>
        <!--name slot是給特定的structure，但必須加name-->
      </template>
      <!--通常再app.vue上加上slot給予name 做a href 最好，統一在app.vue跑a href-->
      <template v-slot:nice>
        <h1>Just Keep it going!!</h1>
      </template>
    </Nohell>
  </teleport>

  <div v-if="showme2">
    <h1>Lakers win!!Lakers win!!</h1>
    <h1>Lakers win!!Lakers win!!</h1>
    <h1>Lakers win!!Lakers win!!</h1>
  </div>

  <button @click.ctrl="openmodal()">On(press ctrl+left click)</button>
  <button @click="closemodal()">off</button>
  <button @click="openmodal2()">Second on</button>
  <button @click="closemodal2()">Second off</button>

  <div>
    <button @click="openplay()" :disabled="play">playme</button>
    <p v-if="play" :delay="delay">This is good</p>
    <p v-if="nono">i disapper!</p>
  </div>

  <div class="block" v-if="showBlock" @click="stopTimer()">click me</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Nohell from "./components/Nohello.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Nohell,
  },
  data() {
    return {
      bla: "Look how nice is it",
      cla: "NBA 75 stars!",
      heihei: "Cavs,GSW,LOS",
      xixi: "KD,James,Curry",
      showme: false,
      showme2: false,
      delay: null,
      play: false,
      nono: false,
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  methods: {
    openmodal() {
      this.showme = true;
    },
    closemodal() {
      this.showme = false;
    },
    openmodal2() {
      this.showme2 = true;
    },
    closemodal2() {
      this.showme2 = false;
    },
    openplay() {
      this.play = true;
      this.delay = 1000 + Math.random() * 5000;
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
  },
  updated() {
    console.log("up update");
    setTimeout(() => {
      this.nono = true;
      console.log(this.delay);
    }, this.delay);
  },
  mounted() {
    setTimeout(() => {
      (this.showBlock = true), this.startTimer();
    }, this.delay);
  },
};
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.block {
  background-color: rgb(140, 255, 0);
  width: 500px;
  text-align: center;
  align-items: center;
  height: 180px;
}
</style>
