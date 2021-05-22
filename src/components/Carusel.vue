<template>
  <hooper :itemsToShow="3">
    <slide class="wrapper" v-for="(poster, indx) in getPosters" :key="indx" :index="indx">
      {{ poster }}
      <img class="carusel-img" :src="img" alt="Афиша мероприятия">
    </slide>
  </hooper>

</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import poster from "../store/poster";

export default {
  data: () => ({
    slide: '',
    img: poster.img
  }),
methods:{},

  computed: {
    getPosters() {
      return this.$store.getters.getPosters
    },
    getPoster() {
      return this.$store.getters.getPoster
    },

    //getPosters() {
    //return this.$store.getters.getPosters
  //},

  },
  async mounted () {
    console.log(this.$store.state.posters)
  },
  created() {
      this.$store.dispatch('poster/getAll')
  },
  name: 'Carusel',
  components: {
    Hooper,
    Slide
  }
};
</script>

<style scoped>
  .wrapper {
    margin-right:15px;

    width: 170px;
    height: 110px;

    background-color: gray;
    border-radius: 20px;
  }
  .carusel-img{
   width:100%;
  }
</style>