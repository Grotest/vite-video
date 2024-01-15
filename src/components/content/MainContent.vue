
<script setup>

defineProps({
  list_head_line: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col v-for="(head_line, i) in list_head_line" :key="i" cols="auto">
        <v-card max-width="344">
          <v-card-item>
            <div class="subscription">
              <div class="text-overline mb-1">{{ head_line.name }}</div>
              <div class="text-h6 mb-1" >{{ head_line.price }}</div>
              <div class="text-caption">
                {{ head_line.discribe }}
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn class="spec_btn"> To buy </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="sass" scoped>
@import '../../assets/style/main.sass'

.subscription
  height: 150px
  width: 160px
.spec_btn
  background-color: $accent
  margin: auto
  color: $text
  height: 50px
</style> 