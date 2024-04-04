<script>
  import { store } from '../../data/store';
  export default {
    props:{
      cardObj: Object,
    },
    
    data(){
      return{
        store
      }
    },
  }
</script>


<template>

  <div class="wrapper m-3 justify-content-center d-flex">
    <img v-if="cardObj.poster_path" :src="`https://image.tmdb.org/t/p/w342${cardObj.poster_path}`" alt="Avatar"
      class="image">
    <img class="notfound" v-else src="/img/imagenotfound.jpg" alt="image">
    <div class="overlay overflow-y-auto">
      <h3>{{ cardObj.title || cardObj.name }}</h3>
      <h5>{{ cardObj.original_title || cardObj.original_name }}</h5>
      <div class="flags">
        <img v-if="cardObj.original_language === 'en'" src="/img/en.png" alt="#">
        <img v-else-if="cardObj.original_language === 'it'" src="/img/it.png" alt="#">
        <img v-else-if="cardObj.original_language" src="/img/ja.png" alt="">
        <p v-else>{{ cardObj.original_language }}</p>
      </div>
      <div class="d-flex justify-content-center ">
        <p v-for="star in 5" :key="star">
          <i v-if="star <= Math.ceil(cardObj.vote_average / 2)" class="fas fa-star"></i>
          <i v-else class="far fa-star"></i>
        </p>
      </div>
      <p class="text-start px-3"><strong>Description:</strong> {{ cardObj.overview }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 20%;
  height: 394px;
}

.image {
  display: block;
  height: auto;
}

.overlay {
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
  scrollbar-width: thin;
}

.wrapper:hover{
  .overlay {
    height: 100%;
  }
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.icon{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon i{
  font-size: 50px;
  color: #ccc;
}

.flags img{
  width: 30px;
  height: 20px;
}

.notfound{
  width: 100%;
  object-fit: fill;
}

.overview{
  text-align: left;
}
</style>