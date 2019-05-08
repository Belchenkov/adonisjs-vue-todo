<template>
    <v-layout row wrap>
        <v-flex xs9 class="text-xs-left">
            <span
                @click="$emit('onClick')"
                v-if="!isEditMode"
                class="cursor"
            >{{title}}</span>
            <v-text-field
                    autofocus
                    v-if="isEditMode"
                    :value="title"
                    color="success"
                    @keyup.enter="$emit('onSave', record)"
                    @input="$emit('onInput', $event)"
            ></v-text-field>
        </v-flex>
        <v-flex xs3>
            <v-icon
                    class="cursor"
                    @click="$emit('onEdit', record)"
                    v-if="!isEditMode"
            >edit</v-icon>
            <v-icon
                    class="cursor ml-3"
                    color="success"
                    @click="$emit('onSave', record)"
                    v-if="isEditMode"
            >check</v-icon>
            <v-icon
                    color="red"
                    class="cursor ml-3"
                    @click="$emit('onDelete', record)"
                    v-if="isEditMode"
            >delete</v-icon>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: [
            'isEditMode',
            'record',
            'title'
        ]
    }
</script>

<style scoped>

</style>