<script setup>
import BackgroundHeadContent from '../components/BackgroundHeadContent.vue';
import Quastion_panel from '../components/QuastiosPanel.vue';
import MainContent from '../components/content/MainContent.vue'; 

const list_head_line = [
        { name:"Standart with ADS", price:"500$", discribe: "7 days fo free watch, 1100+ films and serials" },
        { name:"Standart", price:"700$", discribe: "17 days fo free watch, 2100+ films and serials" },
        { name:"Premium", price:"900$", discribe: "27 days fo free watch, 3100+ films and serials" },
]

</script>

<template>
    <div class="home_page">
      <section class="background-content_wrapper"> 
        <BackgroundHeadContent/>
      </section>
      <div class="main_content">
        <MainContent 
            :list_head_line = list_head_line
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
    height: 700px
    left: -280px
.main_content
    // position: relative
    // top: 710px
</style>