<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const listButtonNav = [
  { name:"Home", link: "/" },
  { name:"Films", link: "/Films" },
  { name:"Serials", link: "/Serials" },
  { name:"VV_TV", link: "/VV_TV"} ]

const listButtonFooter = [
  { name:"support", link: "/" },
  { name:"privacy", link: "/Films" },
  { name:"policy", link: "/Serials" }
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
// .conteiner_main_content
//   max-width: 1200px
//   width: 1100px
//   margin: 0 auto
//   padding: 0 15px
//   background-color: green
// .content_area
//   max-width: 1200px
//   min-width: 900px
//   margin: 0 auto
//   padding: 0 15px
//   background-color: red
//   max-width: 2046px
//   margin: 10 px 30px
.footer
  margin-bottom: 0px
  display: flex
  background-color: black
  height: 50px
</style>
