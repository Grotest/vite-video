<script setup>

defineProps({
  listButtonNav: {
    type: Array,
    required: true
  }
})
// const listButtonNav = ["Films","Serials","VVTV+"]
</script>

<template>
  <div>
    <div> 
      <v-app>
        <v-app-bar
        :elevation="13" rounded
        color="#040C0E"
        >
          <v-spacer/>
          <div v-for="btn in listButtonNav" >
            <v-btn  
             class="btn"
            >
            <router-link to="/Films">{{ btn }}</router-link> 
            </v-btn>
          </div>
        </v-app-bar>
      </v-app>
  </div>
  </div>
</template>

<style scoped>
.btn {
    margin-left: 100px;
    color: #A4978E;
}
</style> 
