<script>
export default { 
    data: ()=> {
        return {
            firstName: "",
            secondName: "",
            dialogVisible: false
        }
    },
    props: {
      user: {
        type: String,
        required: false
      }
    },
    methods: {
      createpost(){
        this.post = "asd1"
        this.$emit("create",this.post)
        // console.log(this.post)
        },
        showDialog(){
          this.$emit("showDialog")
        }
    }
  }

// defineProps({
//   user: {
//     type: String,
//     required: true
//   }
// })

</script>

<template>
   <v-app class="NavigationDrower">
    <v-card>
      <v-layout>
        <v-navigation-drawer
          permanent
          location="right"
        >
          <template v-slot:prepend>
            <v-list-item
              lines="two"
              prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
              title="{nameUser}"
              subtitle="Logged in"
            ></v-list-item>
          </template>
  
          <v-divider></v-divider>
          
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users" @click="showDialog" ></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 250px"></v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<style>
.NavigationDrower{
  width: 200px;
  height: 0px;
}
</style>
