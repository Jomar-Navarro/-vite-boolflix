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
      getApi(){
        axios.get(this.store.apiUrl, {
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

      }
    },  

    mounted(){
      this.getApi()
    }
  }
</script>

<template>
  <div>
    <Header @startSearch = "getApi"/>
    <Main />
    <Footer />
  </div>
</template>

<style lang="scss">

</style>