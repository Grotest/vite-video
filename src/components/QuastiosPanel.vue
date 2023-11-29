<template>
  <div>
    <h2>Questions? Answers.</h2>
    <v-expansion-panels
      v-model="panel"
      multiple
    >
      <v-expansion-panel
        title="Whait is Vite Video TV?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></v-expansion-panel>

      <v-expansion-panel
        title="How much does Vite Video TV? cost?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></v-expansion-panel>

      <v-expansion-panel
        title="Where can I watch Vite Video TV?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        panel: [],
      }
    }
  }
</script>

<style lang="sass" scoped>
h2
  text-align: center 
</style>