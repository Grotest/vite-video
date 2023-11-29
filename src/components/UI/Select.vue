<template>
    <v-select
        chips
        class="select"
        label="Filter by"
        variant="underlined"
        :items="options"
        :value="modelValue"
        @update:modelValue="changeOption"
    ></v-select>
</template>

<script>
export default {
    name:'Select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: ()=> []
        }
    },
    methods: {
        changeOption(event) {
            console.log(event)
            this.$emit('update:modelValue', event)
        }
    }
}
</script>

<style scoped>
.select {
    border-color: bisque;
    margin: 15px;
    width: 50%;
}
</style>