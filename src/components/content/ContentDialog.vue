<template>
    <div v-if="show"> 
        <v-dialog
            v-model="dialog"
            width="auto"
        >
            <template v-slot:activator="{ props }">
            <v-btn
                color="primary"
                v-bind="props"
            >
                Open Dialog
            </v-btn>
            </template>
            <v-card>
            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
    
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true
        },
        dialogVisible: {
            type: Boolean,
            default: false
        },
    data: () => {
    }
    }
}
    
</script>

<style>
/* .content_dialog {
    padding-left: 150px;
    width: 150px;
    height: 250px;
    text-align: center;
    display: flex;

} */
</style>