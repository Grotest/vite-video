<template>
    <ContentForm v-on:addContent="addContent"/>
    <Select
        v-model="selectedSort"
        :options="sortOptions"
    />
    <v-conteiner class="page_list"> 
        <v-row >       
            <Video
                v-if="!isContentLoading"
                    v-for="video in sortedContent"
                    :content="video"
                    @click=" addContentModal(video)"
                    @changeVisible="visibleModalDialog"
            />
            <div v-else> LOADING..... </div>
         </v-row>
    </v-conteiner>
    <!-- <ContentDialog :content="currentContent" :dialogVisible="dialogVisible"/> -->
    <ModalDialog 
        :dialog="dialog"
        :content="currentContent"/>
    <v-pagination
        v-model="page"
        @click="chahgePage(page)"
        :length="4"
        rounded="circle"
    ></v-pagination>
</template>

<script>
import Video from '../components/content/Video.vue'
import ContentForm from '../components/content/ContentForm.vue'
import ContentDialog from '../components/content/ContentDialog.vue'
import Select from '../components/UI/Select.vue'
import axios from "axios"
import ModalDialog from '../components/UI/ModalDialog.vue'

export default {
    components: {
        Video,
        ContentForm,
        Select,
        ModalDialog
    },
    data: () => {
        return {
            list_video: [
                // {id: 1, Name: "Blade", Discription: "Discription1" },
                // {id: 2, Name: "X-men", Discription: "Discription2" },
                // {id: 3, Name: "Batman", Discription: "Discription3" },
            ],
            currentContent: "",
            dialogVisible: false,
            isContentLoading: true,
            selectedSort: '',
            page: 1,
            limit: 14,
            totalPages: 0,
            sortOptions: [],
            //     // {value: 'id', name: 'titles1'},
            //     // // {value: 'date', name: 'По дате'},
            //     // {value: 'title', name: 'titles2'},
            // ],
            arrOptions: [],
            dialog: false,
        }
    },
    mounted() {
        this.fethListVideos()
    },
    // watch: {
    //     selectedSort(newValue) {
    //         console.log (newValue)
    //         this.list_video.sort((post1, post2)=> {
    //             return post1[newValue]?.localeCompare(post2[newValue])
    //         })
    //     },
    computed: {
        sortedContent() {
            console.log(this.selectedSort)
            return [...this.list_video].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            )
        },
    },
    methods: {
        async fethListVideos() {
            setTimeout(async()=>{
                const response = await axios.get ("https://jsonplaceholder.typicode.com/photos", { 
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
            });
            this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
            this.list_video = response.data
            this.arrOptions=Object.keys(this.list_video[0])
            this.isContentLoading = false
            for (let option of this.arrOptions) {
                this.sortOptions.push(option)
            }
        },500)
            
        },
        addContent(content) {
            console.log("addContent")
            this.list_video.push(content)
        },
        chahgePage(page) {
            this.page = page
            console.log(this.page)
            this.fethListVideos()
            // this.page = 3
        },
        visibleModalDialog(param){    
            this.dialog=param
            this.dialog? false : true
        },
        addContentModal(video) {
            this.currentContent = video
            console.log (this.currentContent)
            this.dialog=true
        }
    },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.page_list{
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    margin-top: 10px;
}

</style>