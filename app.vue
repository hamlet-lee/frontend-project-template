<template>
  <div>
    Hello {{ name }} 
    <img src="./images/image.png"></img>

  </div>
</template>
<script>
  export default {
    data(){
      return {
       name: 'Vue.js'
      }
    }
  }
</script>
<style scoped>
  div{
    color: red;
    fontsize: 24px;
  }
</style>
