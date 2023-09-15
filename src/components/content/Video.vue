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
      <div>{{ content.id  }}</div>
        <v-card-title>{{ content.title }} </v-card-title> 
        <v-img
            :src="content.url"
            width="200px"
            height="200px"
        />
    </v-col>
  </div>
</template>

<style scoped>
.page {
    color: black;
    background-color: #1f1e1d; 
}
.img {
  border-radius: 30px;
}
.v_col {
  background-color: #e7e5e2;
  margin: 10px;
  font-size: 15px;
  width: 200px;
  height: 150px;
  border-radius: 30px;
  text-align: -webkit-center;
  padding-top: 15px;
}

</style> 
