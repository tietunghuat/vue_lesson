<template>
  <div>
    <div>
      <div class="one">
        <HelloWorld />
      </div>
    </div>

    <div class="two">
      <BannerA />
    </div>
    <div>
      
      <div class="content-block">
        <h1>發想</h1>
        <p>
          Lacinia dapibus sapien pretium, luctus lorem cum volutpat orci vitae.
          Id class lobortis risus. Magna leo hendrerit fames. Tempor aliquam
          volutpat egestas nunc donec habitant in class volutpat ante arcu.
          Placerat primis congue habitant tincidunt sed eleifend sagittis cras
          facilisi etiam cubilia mi. Sem senectus volutpat donec vivamus leo
          egestas massa ut platea laoreet massa! Pulvinar phasellus maecenas
          cursus justo facilisis quam metus. Dictum euismod vulputate ligula.
          Leo ante venenatis molestie duis fringilla ridiculus montes consequat.
          Nulla tellus nec diam cum mollis neque dignissim sit fermentum
          hendrerit diam? Felis auctor interdum gravida vulputate turpis, a
          mollis ad consequat ac sed. Nibh interdum ut commodo at quisque dolor
          lectus aliquam nisi. Urna varius, blandit habitasse facilisis. Nostra
          vestibulum mi egestas primis sit quis primis neque praesent fermentum
          faucibus. Malesuada metus.
        </p>
      </div>
    </div>
    <div>

      <div class="content-block">
        <h1>動機</h1>

        <p>
          Lacinia dapibus sapien pretium, luctus lorem cum volutpat orci vitae.
          Id class lobortis risus. Magna leo hendrerit fames. Tempor aliquam
          volutpat egestas nunc donec habitant in class volutpat ante arcu.
          Placerat primis congue habitant tincidunt sed eleifend sagittis cras
          facilisi etiam cubilia mi. Sem senectus volutpat donec vivamus leo
          egestas massa ut platea laoreet massa! Pulvinar phasellus maecenas
          cursus justo facilisis quam metus. Dictum euismod vulputate ligula.
          Leo ante venenatis molestie duis fringilla ridiculus montes consequat.
          Nulla tellus nec diam cum mollis neque dignissim sit fermentum
          hendrerit diam? Felis auctor interdum gravida vulputate turpis, a
          mollis ad consequat ac sed. Nibh interdum ut commodo at quisque dolor
          lectus aliquam nisi. Urna varius, blandit habitasse facilisis. Nostra
          vestibulum mi egestas primis sit quis primis neque praesent fermentum
          faucibus. Malesuada metus.
        </p>
      </div>
    </div>
    <hr>
    <div>
      <Card/>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BannerA from "./components/BannerA.vue";
import comment from "./components/comMent.vue";
import Card from "./components/Card.vue";


export default {
  name: "App",
  components: {
    HelloWorld,
    BannerA,
    comment,Card
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.content-block {
  text-align: center;
  align-items: center;
  text-align: justify;
  margin-left: 105px;
  margin-right: 105px;
  font-family: 'Yuji Syuku', serif;

}
hr{
   display: block;
   border: 0;
    border-top: 1px solid #ccc;
  margin:50px 0 10px 380px;
  width:800px;
  text-align:center;
  align-items:center;
  color:rgba(16, 16, 16, 0.716);
  border-radius:10px;
}
body{
  background:rgba(212, 171, 212, 0.177)
}

</style>
