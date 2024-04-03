<script>
  import { store } from '../../data/store';
  export default {
    props:{
      title: String,
      original_title: String,
      language: String,
      vote: Number,
      overview: String,
      image: String,
    },
    
    data(){
      return{
        store
      }
    },
  }
</script>


<template>
  <div class="container m-3">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img :src="`https://image.tmdb.org/t/p/w342${image}`" :alt="title">
        </div>
        <div class="flip-card-back overflow-y-auto">
          <h2>{{ title }}</h2>
          <p>{{ original_title }}</p>
          <p>{{ language }}</p>
          <div class="d-flex justify-content-center ">
            <p v-for="star in 5" :key="star">
                <i v-if="star <= Math.ceil(vote / 2)" class="fas fa-star"></i>
                <i v-else class="far fa-star"></i>
            </p>
          </div>
          <p>{{ overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .flip-card {
  background-color: transparent;
  width: 100%;
  height: 400px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
  img{
    width: 100%;
    height: 100%;
  }
}

.flip-card-back {
  background-color: red;
  color: white;
  transform: rotateY(180deg);
}
</style>