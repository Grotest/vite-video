<script>
export default {
  name: "FormUsers",
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    showDialog(){
          this.$emit("showDialog")
        }
  }
}

</script>

<template>
  <div class="dialog_window" v-if="show" @click="showDialog"> 
    <form @submit.prevent="submit" class="dialog_window_form_users" @click.stop="" >
          <v-text-field
            label="First Name"
            v-model="firstName"
          ></v-text-field>
          <v-text-field
            label="Second Name"
            :value="secondName"
            @input="secondName=$event.target.value"
          ></v-text-field>
          <v-btn 
            v-on:click="actionInput"
          >
            ADD
          </v-btn>
    </form>
  </div>
    
</template>

<style>
.dialog_window {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(231, 227, 222);
  position: fixed;
  display: flex;
}

.dialog_window_form_users {
  background-color: white;
  border-radius: 12px;
  margin: auto;
  min-width: 50px;
  min-height: 50px;
  width: 300px;
  padding: 20px;
}
</style>
