<template>
  <v-carousel
    cycle
    height="700"
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script>

  export default {
    data() {
      return {
        items: [
          {
            src: 'src/assets/img/head_poster.jpeg',
          },
          {
            src: 'src/assets/img/joker.jpeg',
          },
          {
            src: 'src/assets/img/rocky.jpeg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>