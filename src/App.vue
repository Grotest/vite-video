<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const listButtonNav = [
  { name:"Home", link: "/", id: "Home" },
  { name:"Films", link: "/Films", id: "Films" },
  { name:"Serials", link: "/Serials",  id: "Serials" }
]

const listButtonFooter = [
  { name:"support", link: "" },
  { name:"privacy", link: "" },
  { name:"policy", link: "" }
]
</script>

<template>
  <div class="root">
   <div class="header"> 
    <div class="conteiner">
      <Navbar :listButtonNav="listButtonNav"/>
    </div>
   </div>
   <div class="main">
    <div class="conteiner"> 
      <router-view class="content_area"/>
    </div>
   </div>
   <div class="footer">
    <div class="conteiner">
      <Footer :listButtonFooter="listButtonFooter"/>
    </div>
   </div>
  </div>
</template>

<style lang="sass" scoped>
@import 'assets/style/main.sass'
.root
  display: block
  background-color: $background
  height-max: 1980px
.header
  display: flex
  background-color: black
  height: 50px
.conteiner
  max-width: 1500px
  width: 1300px
  margin: 0 auto
  padding: 0 15px
  height: 100%
.main
  display: block
.footer
  margin-bottom: 0px
  display: flex
  background-color: black
  height: 50px
</style>
