<template>
  <div>
   
      <div class="container">
        <!--Area of the images-->
        <div class="wrapper">
          <img src="../assets/pic/miso-nikolic-arcade-final.jpg" />
          <img src="../assets/pic/arcade5.jpg" />
          <img src="../assets/pic/carlos-perez-carlos-perez-arcade.jpg" />
          <img src="../assets/pic/kiwi-creations-new-bg.jpg" />
        </div>
      </div>
    <h1>{{ msg }}</h1>
    
  </div>
  
</template>

<script>
export default {
  name: "BannerA",
  props: ["msg"],
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: block;
}

/*Basic structure of slider*/
.container {
  height:500px;
  width: 800px;
  max-width: 1100px;
  max-height: 50%;
  position:relative;
  transform: translate(-50%, -50%);
  margin-top:20%;
  left: 50%;
  overflow: hidden;
  border: 10px solid #ffffff;
  border-radius: 8px;
  box-shadow: -1px 5px 15px black;
  align-items: center;
  text-align: center; 
}

/*Area of images*/
.wrapper {
  width: 100%;
  display: flex;
  animation: slide 16s infinite; 
}

img {
  width: 100%;
   height:fit-content;
  
}
/*Animation activated by keyframes*/
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-100%);
  }
  55% {
    transform: translateX(-200%);
  }
  75% {
    transform: translateX(-200%);
  }
  80% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(-300%);
  }
}

h1 {
  font-size: 30px;
  font-family: "Yuji Syuku", serif;

}
</style>
