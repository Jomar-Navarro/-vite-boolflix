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
  <div class="text-center my-3">
    <h1>Movie</h1>
    <div class="row row-cols-6 text-center justify-content-center d-flex flex-wrap">
      <card
        v-for="movie in this.store.moviesList"
        :key="movie.id"
        :title="movie.title"
        :original_title="movie.original_title"
        :language="movie.original_language"
        :vote="movie.vote_average"
        :overview="movie.overview"
        :image="movie.poster_path"/>
    </div>
  </div>

  <div class="text-center my-3">
    <h1>TV Series</h1>
    <div class="row row-cols-6 text-center justify-content-center d-flex flex-wrap">
      <card
        v-for="series in this.store.tvseriesList"
        :key="series.id"
        :title="series.name"
        :original_title="series.original_name"
        :language="series.original_language"
        :vote="series.vote_average"
        :overview="series.overview"
        :image="series.poster_path" />
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>