<template>
  <div class="all">
    <div class="card">
      <img src="../assets/pic/ball1.jpg" alt="machine" style="width: 70%" />
      <div class="container">
        <h4><b>台式彈珠檯</b></h4>
        <p>
          Lacinia dapibus sapien pretium, luctus lorem cum volutpat orci vitae.
        </p>
      </div>
    </div>

    <div class="card">
      <img src="../assets/pic/ball3.jpg" alt="machine" style="width: 70%" />
      <div class="container">
        <h4><b>投籃機</b></h4>
        <p>
          Id class lobortis risus. Magna leo hendrerit fames. Tempor aliquam
        </p>
      </div>
    </div>

    <div class="card">
      <img src="../assets/pic/arcade.jpg" alt="machine" style="width: 70%" />
      <div class="container">
        <h4><b>街機</b></h4>
        <p>volutpat egestas nunc donec habitant in class volutpat ante arcu.</p>
      </div>
    </div>
  </div>
  <div id="app3">
    <div class="column">
      <div v-for="m in message">{{ m }}</div>
    </div>
    <input
      class="tt"
      type="text"
      v-model.trim="add"
      placeholder="Feel free to said something!"
      @keydown.enter="addmessage"
    />
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      add: "",
      column: "",
      message: ["Awesome!", "Keep it Going!"],
    };
  },
  methods: {
    addmessage() {
      return this.message.push(this.add), (this.add = "");
    },
  },
};
</script>

<style scoped>
.all {
  padding: 0;
  margin: 50px 10px 0 10px;
  box-sizing: block;
  font-family: "Yuji Syuku", serif;
}
img {
  max-width: 70%;
  height: 200px;
  width: 300px;
}
.card {
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  max-width: 60%;
  margin-left: 5%;
  width: 24%;
  max-height: 300px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
.column {
  border: solid black 3px;
  width: 150px;
  height: 150px;
  position: relative;
  font-family: "Yuji Syuku", serif;
  align-items: center;
  text-align: center;
  width: 600px;
  margin-top: 20px;
  display: block;
  margin-left: 450px;
}
.tt {
  width: 350px;
  align-items: center;
  text-align: center;
  margin-top: 5px;
}
</style>
