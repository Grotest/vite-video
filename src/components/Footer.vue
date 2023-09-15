<template>
  <v-app> 
    <v-footer class="footer">
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>
      <div>
        Phasellus feugiat arcu sapien.
      </div>
      <v-divider></v-divider>
      <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
    </v-footer>
  </v-app> 
</template>

<script>
  export default {
    data: () => ({
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    }),
  }
</script>

<style scoped>
.footer {
  background-color: black;
  height: 25px;
  color: aliceblue;
  text-align: center;
}
</style>