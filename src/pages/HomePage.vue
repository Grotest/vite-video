<script setup>
import BackgroundHeadContent from '../components/BackgroundHeadContent.vue';
import Navbar from '../components/Navbar.vue'
import MainContent from '../components/content/MainContent.vue'; 

const list_head_line = [
        { name:"Watch premier", link: "/Watch_premier" },
        { name:"Top chart", link: "/Top_chart" },
        { name:"Free", link: "/Free" },
]

</script>

<template>
    <div class="home_page">
        <div class="background-content__wrapper"> 
                <BackgroundHeadContent/>
                <div class="conteiner"> 
                    <MainContent :header_name_line = head_line  v-for = "head_line in list_head_line"/>
            </div>
        </div>     
    </div>

</template>

<style lang="sass" scoped>
@import "../assets/style/main.sass"
v-btn
    color: white
.background-content__wrapper
   
.conteiner
  max-width: 1546px
  margin: 0px auto
  display: contents
  max-height: 30px
</style>