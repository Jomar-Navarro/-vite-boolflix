<script>
  import card from '../components/part/card.vue'
  import { store } from '../data/store';
  export default {
    components:{
      card,
    },
    
    data(){
      return{
        store
      }
    }
  }
</script>


<template>
  <div class="row row-cols-6 text-center justify-content-center d-flex flex-wrap">
    <card 
    v-for="movie in this.store.moviesList"
    :key="movie.id"
    :title="movie.title"
    :original_title="movie.original_title"
    :language="movie.original_language"
    :overview="movie.overview"
    :image="`https://image.tmdb.org/t/p${movie.poster_path}`"
    />
  </div>
</template>


<style lang="scss" scoped>

</style>