<template>
    <v-select
        class="select"
        label="Filter by"
        :items="options"
        variant="outlined"
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
    background-color: rgb(90, 96, 93);
    border-color: bisque;
    margin: 15px;
    width: 100%;
}


</style>