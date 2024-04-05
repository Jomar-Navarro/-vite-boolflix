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
        this.store.search = true;
        this.$emit('startSearch');
        console.log(this.store.queryParams.query);
      },
    }
  }
</script>


<template>
  <header>
    <div class="container d-flex justify-content-between text-center align-items-center h-100">
      <div class="d-flex align-items-center">
        <div class="logo">
          <img src="/img/boolflix-logo.png" alt="#">
        </div>
        <div class="px-5">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Movies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tv Series</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="searchBar d-flex">

        <input type="text" class="form-control" placeholder="Search a movie..."
          v-model.trim="this.store.queryParams.query" @keyup.enter="$emit('startSearch')">

        <button @click="star$emit('startSearch')" class="btn btn-secondary mx-3">Search
        </button>
      </div>
    </div>
  </header>
</template>


<style lang="scss">
  header{
    color: red;
    height: 100px;
    background-color: black;
    .searchBar{
      width: 25%;
    }

    .logo{
      img{
        width: 200px;
      }
    }

    .nav{
      li{
        a{
          color: rgb(255, 255, 255, 0.8);

          &:hover{
            color: red;
          }
        }
      }
    }
  }
</style>