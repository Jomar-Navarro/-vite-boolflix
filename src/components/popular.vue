<script>
import card from '../components/part/card.vue'
import { store } from '../data/store';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
  export default {
  props: {
    type: String,
  },

  components: {
    card,
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      store,
      modules: [Pagination],
    }
  },
  }
</script>


<template>


  <swiper :slidesPerView="3" :spaceBetween="1" :pagination="{
    clickable: true,
  }" :modules="modules" class="mySwiper">
    <swiper-slide v-for="item in store.popularList" :key="item.id">
      <div class="overflow-hidden">
        <div class="container text-center my-5">
          <h1 class="text-white">Popular</h1>
          <div class="row row-cols-2 justify-content-center">
            <card :cardObj="item" />
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>




</template>


<style lang="scss" scoped>

</style>