<template>
    <div class="content">
        <h1>{{title}}</h1>
    </div>
 
    


<!-- <textarea> Type here please...</textarea> -->
</template>

<script>
export default{
    name:"comment",
    props:["title"]

}
</script>

<style>
    * {
  padding: 0;
  margin: 0;
}
.content{
    margin-top:-200px;
    margin-left:-1250px;
}
h1{
font-size: 30px;
font-family: "Yuji Syuku", serif;
}

</style>