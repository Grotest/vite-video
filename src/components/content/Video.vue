<script>

export default {
   props: {
    content: {
        type: Object,
        requer: true
    }
   },
   methods: {
    // openContentDialog() {
    //   this.$emit(openContentDialog, this.content)
    // }
   }
}
</script>

<template>
  <div class="page" v-on:click="openContentDialog">
    <v-col cal = "4" class="v_col" > 
        <v-card-title>{{ content.nameRu }} </v-card-title>
        <v-img
            :src="content.posterUrlPreview"
            width="200px"
            height="200px"
        />
        <v-card-title>{{ content.rating }}</v-card-title>
        <div>{{ content.year }}</div>
        
    </v-col>
  </div>
</template>

<style scoped>
.page {
    color: black;
}
.src {
  border-radius: 30px;
}
.v_col {
  background-color: #e7e5e2;
  margin: 10px;
  font-size: 15px;
  width: 220px;
  height: 350px;
  border-radius: 30px;
  text-align: -webkit-center;
  padding-top: 15px;
}

</style> 
