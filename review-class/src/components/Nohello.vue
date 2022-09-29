<template>
<div class="hi">
    <h3>
        {{team}}
    </h3>
    <h5>
        {{allstar}}
    </h5>
    <slot></slot>
    <slot name="links">
     <p> Sign up now for free!!</p>
     </slot>
    
</div>
</template>

<script>

export default{
    name:"NoHello",
    props:["team","allstar"]
}
</script>

<style scoped>
    h3{
        font-size: larger;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: rgb(57, 57, 147);
    }

    h5{
        font-size:smaller;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color:rgb(50, 21, 77);
    }
    .hi{
        background-color: red;
        width: 500px;
        position: relative;
        align-items: center;
        margin-left: 600px;
        align-content: center;
    }
</style>