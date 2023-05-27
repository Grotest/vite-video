<template>
    <v-conteiner> 
        <v-row>
            <button v-on:click="fethListVideos">+1</button>
            <Video
                v-for="video in list_video"
                :video="video"
            />
           
         </v-row>
    </v-conteiner>
</template>

<script>
import Video from '../components/videos/Video.vue'
import axios from "axios"

export default {
    components: {
        Video
    },
    data: () => {
        return {
            list_video: [
                // {id: 1, Name: "Blade", Discription: "Discription1" },
                // {id: 2, Name: "X-men", Discription: "Discription2" },
                // {id: 3, Name: "Batman", Discription: "Discription3" },
            ]
        }
    },
    methods: {
        async fethListVideos() {
            const response = await axios.get ("https://jsonplaceholder.typicode.com/photos?_limit=10")
            this.list_video = response.data
            console.log(this.list_video)
    },  
},
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>