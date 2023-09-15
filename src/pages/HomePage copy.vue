<template>
    <div>
       <NavigationDrower
        @showDialog="showDialog"
        @create="createpost"
       />

       <!-- <FormUsers 
        :show="dialogVisible"
         @showDialog="showDialog"
       /> -->
    </div>
</template>

<script>
import NavigationDrower from "../components/NavigationDrower.vue"
import FormUsers from "../components/FormUsers.vue"

export default { 
    data: ()=> {
        return {
            firstName: "",
            secondName: "",
            dialogVisible: false
        }
    },
    components: {
        NavigationDrower, FormUsers
    },
    methods: {
        actionInput() {
            console.log(this.firstName,this.secondName)
            this.firstName = "",
            this.secondName = ""
        },
        showDialog(){
            console.log(this.dialogVisible)
            this.dialogVisible? this.dialogVisible = false: this.dialogVisible = true;
        },
        createpost(post) {
            console.log(this.post)
        }
    }
}
</script>

<style scoped>

/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} */
/* form {
    width: 200px;
    align-self: center;
    margin-left: 500px;
} */

</style>