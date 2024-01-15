<template>
  <v-carousel cycle height="700" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <iframe 
            width="100%"
            height="100%"
            v-bind:src='slide'
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data() {
      return {
        slides: [
          "https://www.youtube.com/embed/uwBlGUzW5to?si=X-psci8n6Eb9qKuD?controls=1&fs=0&modestbranding=1&rel=0&mute=1&showinfo=0&autoplay=1",
          "https://www.youtube.com/embed/RthBSrQGY7Y?si=dw30uuJezzDn_730?controls=1&fs=0&modestbranding=1&rel=0&mute=1&showinfo=0&autoplay=1",
          "https://www.youtube.com/embed/JEEQjpNT8BQ?si=YeCIgAZQSrRRa1-i?controls=1&fs=0&modestbranding=1&rel=0&mute=1&showinfo=0&autoplay=1",
          "https://www.youtube.com/embed/nS12Fbtgr5A?si=fsBGMn1DPK3O_sXT?controls=1&fs=0&modestbranding=1&rel=0&mute=1&showinfo=0&autoplay=1",
        ],
      }
    },
  }
</script>
