<template>
  <main>
    <!-- Sección del Slider -->
    <section class="slider">
      <swiper
        ref="mySwiper"
        :direction="'vertical'" 
        :slides-per-view="1"
        :space-between="10"
        :mousewheel="true"
        :autoplay="{ delay: 8000, disableOnInteraction: false }"
        :loop="true"
        :pagination="{ clickable: true }"
        :modules="modules"
        class="mySwiper"
        @paginationClick="onPaginationClick" 
      >
      <swiper-slide>
        <img src="/icons/free-photo-of-metal-logo-herramientas-tijeras.jpeg" alt="Slide 1" />
      </swiper-slide>
      <swiper-slide>
        <img src="/icons/pole_barber.jpeg" alt="Slide 2" />
      </swiper-slide>
      <swiper-slide>
        <img src="/icons/beer_barber.jpeg" alt="Slide 3" />
      </swiper-slide>
      </swiper>>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 Fredery's Barber. Todos los derechos reservados.</p>
  </footer>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/assets/barbermobile.css'
import { Autoplay, Mousewheel, Pagination, Navigation } from 'swiper/modules';
import { ref } from 'vue'; // Importa ref

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = [Autoplay, Pagination, Navigation, Mousewheel];
    const mySwiper = ref(null); 
    const onPaginationClick = () => {
      mySwiper.value.mySwiper.autoplay.stop();  // Detener el autoplay al hacer clic en la paginación
    };

    return {
      modules,
      onPaginationClick,
      mySwiper,
    };
  },
};

</script>

<style scoped>

</style>
