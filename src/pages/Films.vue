<template>
    <div> 
        <form color="white"> 
            <h4>Create post</h4>
            <input 
                
                class="input" 
                type="text" 
                placeholder="Название"
            >
            <input 
                class="input" 
                type="text" 
                placeholder="Описание"
            >
            <button class="btn" @click="createPost">Создать</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            likes: 10,
            dislikes: 0,
            posts: [
                {id: 1, Name: "Js1", Discription: "Discription1" },
                {id: 2, Name: "Js2", Discription: "Discription2" },
                {id: 3, Name: "Js3", Discription: "Discription3" },
            ]
        }
    },
    methods: {
        addLike() { 
            this.likes +=1;
        },
        addDisLike() { 
            this.dislikes +=1;
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}
.input {
    width: 100%;
    padding: 10px 15px;
    margin-top: 10px;
}
.btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: aqua;
    border: 2px solid teal;
}
</style>