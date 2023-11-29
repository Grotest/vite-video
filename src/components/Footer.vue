<script setup>

defineProps({
  listButtonFooter: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="footer">
    <div class="conteiner">
      <div v-for="btn in listButtonFooter">
        <v-btn  
          variant="plain"
          class="btn"
        >
          <router-link :to="{ path:btn.link }" class="btn" >{{ btn.name }}</router-link> 
        </v-btn>
      </div>
    </div>
  </div> 
</template>

<style lang="sass" scoped>
@import '../assets/style/main.sass'

.permanent_elements
  position: absolute  
  right: 0px
  width: 330px
.spec_btn
  background-color: $accent
  position: absolute
  right: 10px
  color: $text
  height: 50px
.footer 
  background-color: black
  height: 50px
  padding: 10px
.conteiner
  position: relative
  max-width: 1546px
  margin: 0px auto
  display: flex
  max-height: 30px
.search
  height: 10px
  width: 50px
  display: inline
  padding: 10px
input
  border: 1px solid $text
  border-radius: 5px
  margin-left: 0px
  padding-left: 5px
  color: $text
  position: absolute
</style> 
