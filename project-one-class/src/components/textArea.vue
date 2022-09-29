<template>
  <div>
    hsahahahasdfgsdfgsdfgsdfg
    sdfgsdfg
    sdfgsdfgsd
    fgd
    sdfgsdfgsd
    fgdsdfgd
    sdfgsdfgsdfg
    sdfgsdfgsdfgsdfg
    dsf
    gravidasdfg
    sdfgsdfgsdfgsdfgsdf
    gravidasdfgsd
    fgdsdfgdsd
    fgdsdfgdsd
    fgdsdfgdfg
  </div>
</template>

<script>
export default {
  name: "text",
  data() {
    return {
      add: "",
      messages: ["First line", "Second line", ".", "."]
      
    };
  },
  methods: {
    addmessage() {
      return this.messages.push(this.add);
      this.add = "";
    },
  },
};
</script>

<style scoped>
    div{
        font-size:50px;
        margin: 100px 100px 100px 100px;
    }
</style>
