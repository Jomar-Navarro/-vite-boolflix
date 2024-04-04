<script>
import card from '../components/part/card.vue'
import { store } from '../data/store';
  export default {
  props: {
    type: String,
  },

  components: {
    card,
  },

  data() {
    return {
      store,
    }
  },
  }
</script>


<template>
  <main class="overflow-hidden">

    <div class="container text-center my-5">
      <h1 class="text-white">Popular</h1>
      <div class="row row-cols-5 justify-content-center">
        <card v-for="item in store.popularList" :key="item.id" :cardObj="item" />
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>

</style>