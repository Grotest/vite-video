<template>
    <div class="content_form">
      <v-text-field
        label="Add content"
        :rules="rules"
        hide-details="auto"
        v-model="title"
      />

      <v-file-input
        label="File input"
        v-model="img"
    ></v-file-input>
      <v-btn
        v-on:click="addContent"> ADD </v-btn>
    </div>
    
</template>

<script>

export default {
    data: () => ({
        title:"",
        img: null
    }
    ),
    methods: {
        addContent() {
            const reader = new FileReader()
            reader.onload = () => {
                let content = {
                    id: Date.now(),
                    title: this.title,
                    url: reader.result
                }
                this.$emit('addContent',content)
                console.log("content4")
            }
            if (this.img[0]) {
                reader.readAsDataURL(this.img[0])
            }
            // reader.readAsDataURL(this.img)
                
        }
    }
}
</script>

<style>
.content_form {
    padding-left: 150px;
    width: 250px;
    height: 250px;
    text-align: center;
    display:grid
}
</style>