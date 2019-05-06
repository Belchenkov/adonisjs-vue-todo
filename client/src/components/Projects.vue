<template>
    <Panel title="Projects">
        <div
            v-for="project in projects"
            :key="project.id"
        >{{project.title}}</div>
        <v-layout row wrap >
            <v-flex xs8>
                <v-text-field
                    placeholder="My project name..."
                    color="green"
                    prepend-icon="business_center"
                    :value="newProjectName"
                    @input="setNewProjectName"
                ></v-text-field>
            </v-flex>
            <v-flex xs4>
                <v-btn
                    class="mt-2"
                    dark
                    color="success"
                    @click="createProject"
                >
                    <v-icon left>control_point</v-icon>
                    Create</v-btn>
            </v-flex>
        </v-layout>
    </Panel>
</template>

<script>
    import { mapMutations, mapState, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState('projects', [
                'projects',
                'newProjectName'
            ])
        },
        methods: {
            ...mapMutations('projects', [
                'setNewProjectName'
            ]),
            ...mapActions('projects', [
                'createProject',
                'fetchProjects'
            ])
        },
        mounted() {
            this.fetchProjects();
        }
    }
</script>

<style scoped>

</style>