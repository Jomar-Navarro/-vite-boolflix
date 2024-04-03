<script>
  import axios from 'axios';
  import { store } from './data/store';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  export default {
    components:{
      Header,
      Main,
      Footer,
    },

    data(){
      return{
        store
      }
    },
    
    methods:{
      getApiMovie(){
        axios.get(this.store.apiUrlMovie, {
          params: this.store.queryParams
        })
        .then(result => {
          this.store.moviesList = result.data.results
          console.log(this.store.moviesList)
        })
        .catch(error => {
          console.log(error);
          this.store.errorString = 'Movie not found'
        })

      },

      getApiTvseries() {
        axios.get(this.store.apiUrlTvseries, {
          params: this.store.queryParams
        })
          .then(res => {
            this.store.tvseriesList = res.data.results
            console.log(this.store.tvseriesList)
          })
          .catch(error => {
            console.log(error);
            this.store.errorString = 'Tv Series not found'
          })

      }
    },  

    mounted(){
      this.getApiMovie()
      this.getApiTvseries()
    }
  }
</script>

<template>
  <div>
    <Header @startSearch = "getApiMovie"/>
    <Main />
    <Footer />
  </div>
</template>

<style lang="scss">

</style>