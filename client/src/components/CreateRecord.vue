<template>
    <v-layout row wrap >
        <v-flex xs8>
            <v-text-field
                    :placeholder="placeholder"
                    color="success"
                    prepend-icon="business_center"
                    :value="value"
                    @input="$emit('onInput', $event)"
                    @keyup.enter="$emit('create')"
            ></v-text-field>
        </v-flex>
        <v-flex xs4>
            <v-btn
                    class="mt-2"
                    dark
                    color="success"
                    @click="$emit('create')"
            >
                <v-icon left>control_point</v-icon>
                Create</v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: [
            'placeholder',
            'value'
        ]
    }
</script>

<style scoped>

</style>