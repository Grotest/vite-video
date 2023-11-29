<template>
    <v-row justify="center"  >
      <v-dialog 
        :modelValue="dialog"
        @update:modelValue="dialog = $event"
        @click="changeDialog"
        width="800"
        height="900"
      >
        <v-card>
          <v-img
            class="align-end text-white"
            :height="750"
            :src="content.posterUrlPreview"
            cover
          >
          <v-card-title height = "25px"> {{ content.nameRu }} </v-card-title>
          </v-img>
          <v-for content.genres> </v-for>
          <div v-for="genre in content.genres">
                {{ genre.genre }}
          </div>
          <v-card-actions>
            <v-btn color="orange"> Wath </v-btn>

            <v-btn color="orange"> In collection </v-btn>
          </v-card-actions>
          
        </v-card>
      </v-dialog>
    </v-row>
  </template>

  <script>

import { objectToString } from '@vue/shared';

    export default {
        props: {
            dialog: {
                type: Boolean,
                default: false
            },
            content: {
                type: String,
                default: ""
            }
        },
        methods: {
            changeDialog(){
                this.$emit('changeVisible', false)
            }
        }
    }
  </script>