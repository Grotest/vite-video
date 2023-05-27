<script>
export default {
   props: {
    video: {
        type: Object,
        requer: true
    }
   }
}
</script>

<template>
  <div class="page">
    <v-col cal = "4"> 
        <v-card-title>{{video.title}} </v-card-title> 
        <v-img
            :src="video.url"
            width="200px"
            height="200px"
        />
    </v-col>
  </div>
</template>

<style scoped>
.page {
    color: black;
    background-color: #A4978E; 
}
</style> 
