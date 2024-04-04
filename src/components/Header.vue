<script>  
  import { store } from '../data/store'
  export default {
    data(){
      return{
        store,
        movieSearch: '',
        tvSearch: '',
      }
    },
    

    methods:{
      startSearch(){
        this.store.queryParams.query = `${this.movieSearch} ${this.tvSearch}`;
        this.$emit('startSearch');
        console.log(this.store.queryParams.query);
      }
    }
  }
</script>


<template>
  <header>
    <div class="container d-flex justify-content-between text-center align-items-center h-100">
      <div class="logo">
        <h1>{{ this.store.mainTitle }}</h1>
      </div>

      <div class="searchBar d-flex">
        
        <input
          type="text"
          class="form-control"
          placeholder="Search a movie..."
          v-model.trim="this.store.queryParams.query"
          @keyup.enter="$emit('startSearch')">

        <button
          @click="star$emit('startSearch')"
          class="btn btn-secondary mx-3">Search
        </button>
      </div>
    </div>
  </header>
</template>


<style lang="scss">
  header{
    color: red;
    height: 80px;
    background-color: black;
    .searchBar{
      width: 25%;
    }
  }
</style>