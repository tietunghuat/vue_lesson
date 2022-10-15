<template>
  <div class="hello">
  <div :class="{ hahahahahahaha :theme === 'sale'}"> <!--class等於hahaha 如果 theme===sale 和 app.vue的theme=sale一致-->
    <h1>{{ title_message }}</h1>
    <p>{{pav}}</p>
  </div>
  </div>
  <div>
    <textarea v-model="plus"/>
    
    <button @click="gg()"> plus</button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: ["title_message",'pav','theme'],
  data(){
    return{
      plus:1
    }
  },
  methods:{
    gg(){
      return this.plus++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello .haha{
  font-size: 80px;
}
</style>
