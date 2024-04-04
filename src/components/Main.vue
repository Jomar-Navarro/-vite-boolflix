<script>
  import card from '../components/part/card.vue'
  import { store } from '../data/store';
  export default {
    props:{
      type: String,
      title: String,
      original_title: String,
      language: String,
      vote: String,
      overview: String,
      image: String,
    },

    components:{
      card,
    },
    
    data(){
      return{
        store
      }
    },

    computed:{
      title(){
        return this.type === 'movie' ? 'Film' : 'Tv Series'
      }
    }
  }
</script>


<template>
  <main class="overflow-hidden">
    <div class="container text-center my-5">
      <h1 class="text-white">{{ title }}</h1>
      <div class="row row-cols-6 justify-content-center">
        <card
          v-for="item in store[type]"
          :key="item.id"
          :cardObj="item" />
      </div>
    </div>
  </main>
</template>


<style lang="scss">

</style>