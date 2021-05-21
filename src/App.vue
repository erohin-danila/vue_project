<template>
  <div id="app">
    <div class="container">
       <Header/>
      <router-view /> 
    </div>
  </div>
</template>

<style lang="scss">






</style>


<script>
import Header from "@/components/Header/Header.vue"

export default{
  name:"app",
  components:{
    Header
  }
}

  
</script>
