<script setup>

defineProps({
  listButtonNav: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="navbar">
    <div class="conteiner_link"> 
      <div v-for="btn in listButtonNav">
        <v-btn  
          variant="plain"
          class="btn"
        >
          <router-link :to="{ path:btn.link }" class="btn" >{{ btn.name }}</router-link>
        </v-btn>
      </div>
    </div>
    <div class="permanent_elements">
      <Input
        type="text"
        v-model="value"
        placeholder="search"
      ></input>
      <v-btn class="spec_btn" density="compact">Sing in</v-btn>
    </div>
  </div> 
</template>

<style lang="sass" scoped>
@import '../assets/style/main.sass'

.permanent_elements 
  display: flex
  margin: 0px auto
  justify-content: space-between
.spec_btn
  background-color: $accent
  color: $text
  height: 50px
.btn:hover
  background: $background-btn
.navbar
  display: flex
  justify-content: space-between
  align-items: center
.conteiner_link
  display: flex
  margin: 0px auto
input
  border: 1px solid $text
  border-radius: 5px
  margin-left: 0px
  padding-left: 5px
  color: $text

</style> 
