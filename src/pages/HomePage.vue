<script setup>
import BackgroundHeadContent from '../components/BackgroundHeadContent.vue';
import Quastion_panel from '../components/QuastiosPanel.vue';
import MainContent from '../components/content/MainContent.vue'; 

const list_head_line = [
        { name:"Watch premier", link: "/Watch_premier" },
        { name:"Top chart", link: "/Top_chart" },
        { name:"Free", link: "/Free" },
]

</script>

<template>
    <div class="home_page">
      <section class="background-content_wrapper"> 
        <BackgroundHeadContent/>
      </section>
      <div class="main_content">
        <MainContent 
            :header_name_line = head_line
            v-for = "head_line in list_head_line"
        />
      </div>
      <div class="quastion_panel">
        <Quastion_panel/>
      </div>
      
    </div>

</template>

<style lang="sass" scoped>
@import "../assets/style/main.sass"
v-btn
    color: white
.background-content_wrapper
    position: relative
    width: 1800px
    left: -280px
.main_content
    // position: relative
    // top: 710px
</style>