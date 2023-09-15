<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const listButtonNav = [
  { name:"Home", link: "/" },
  { name:"Films", link: "/Films" },
  { name:"Serials", link: "/Serials" },
  { name:"VV_TV", link: "/VV_TV"} ]
</script>

<template>
  <div class="root"> 
      <v-conteiner class="navbar">  
        <Navbar :listButtonNav="listButtonNav"/> 
      <div class="content_area"> 
        <v-conteiner>
          <router-view />
        </v-conteiner>
      </div>
      </v-conteiner>
      <v-conteiner class="footer"> 
        <Footer/>
      </v-conteiner>
</div>
 
</template>

<style lang="sass" scoped>
@import 'assets/style/main.sass'
.root
  display: grid
  background-color: $background

.conteiner
    max-width: 2046px
    margin: 0px auto
.footer 
  height: 250px
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   position: relative;
// }
// .content_area {
//   display: flex;
//   margin-top: 10px;
//   margin-left: 40px;
//   margin-right: 40px;
//   align-content:center;
//   position: relative;
// }
// .navbar {
//   height: 5px;
// }
// .page {
//   background-color: bisque;
// }

</style>
