<template>
    <v-row justify="center"  >
      <v-dialog 
        :modelValue="dialog"
        @update:modelValue="dialog = $event"
        @click="changeDialog"
        width="800">
        <v-card>
          <v-img
            class="align-end text-white"
            height="200"
            :src="content.url"
            cover
          >
          <v-card-title>{{ content.id }}</v-card-title>
            </v-img>

          <v-card-title>{{ content.id }}
            <span class="text-h5"></span>
          </v-card-title>
          <v-card-text>
            {{content.title}}
          </v-card-text>
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
                // console.log(this.content)
            }
        }
    }
  </script>