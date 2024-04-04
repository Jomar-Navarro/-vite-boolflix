<script>
  import axios from 'axios';
  import { store } from './data/store';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  export default {
    components:{
      Header,
      Main,
    },

    data(){
      return{
        store
      }
    },
    
    methods:{

      getApi(type){
        console.log(type);
        axios.get(this.store.apiUrl + type,{
          params: store.queryParams
        })
          .then(res => {
            console.log(res.data);
            this.store[type] = res.data.results;
          })
      },

      startSearch(){
        this.getApi('movie')
        this.getApi('tv')
      }
    },  

    mounted(){
      this.startSearch()
    }
  }
</script>

<template>
  <Header @startSearch="startSearch" />
  <Main type="movie" />
  <Main type="tv" />
</template>

<style lang="scss">

</style>