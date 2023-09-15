<script>
    export default {
      data: () => ({
        model: null,
      }),
      props: {
        header_name_line: {
            type: Object,
            required: {}
        }
      }
    }
</script>

<template>
    <v-sheet class="mx-auto" elevation="8" max-width="1546px">
        <div class="helf_header_with_see">
            <a> 
                {{ header_name_line.name }}
            </a>
        </div>
      <v-slide-group
        v-model="model"
        class="pa-4"
        selected-class="bg-success"
        show-arrows
      >
        <v-slide-group-item
          v-for="n in 15"
          :key="n"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <v-card
            color="grey-lighten-1"
            :class="['ma-4', selectedClass]"
            height="200"
            width="400"
            @click="toggle"
          >
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon
                  v-if="isSelected"
                  color="white"
                  size="48"
                  icon="mdi-close-circle-outline"
                ></v-icon>
              </v-scale-transition>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #0f7afc;
  font-size: 2rem;
}
a:hover {
  text-decoration: none;
  color: #cf0000;
  border-bottom-color: rgba(208, 64, 0, 0.2);
  cursor: pointer;
}

</style>
  
  