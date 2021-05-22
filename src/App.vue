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
import {dispatch, getters} from "@/store"

export default{
  name:"app",
  components:{
    Header
  },
  computed: {
    posters() {
      return getters['poster/getPosters']
    },

  },
  created() {
    dispatch('poster/getAll')
    // dispatch('poster/getById', 1)

    dispatch('poster/getAll').then((posters) => {
     return posters;
    })
  }
}

  
</script>
