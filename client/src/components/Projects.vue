<template>
    <Panel title="Projects">
        <div
            class="mt-2 project"
            v-for="project in projects"
            :key="project.id"
        >
            <v-layout row wrap>
                <v-flex xs9 class="text-xs-left">
                    <span v-if="!project.isEditMode">{{project.title}}</span>
                    <v-text-field
                            autofocus
                            v-if="project.isEditMode"
                            :value="project.title"
                            @keyup.enter="saveProject(project)"
                            @input="setProjectTitle({
                                project,
                                title: $event
                            })"
                    ></v-text-field>
                </v-flex>
                <v-flex xs3>
                    <v-icon
                        class="cursor"
                        @click="setEditMode(project)"
                        v-if="!project.isEditMode"
                    >edit</v-icon>
                    <v-icon
                        class="cursor ml-3"
                        @click="saveProject(project)"
                        v-if="project.isEditMode"
                    >check</v-icon>
                </v-flex>
            </v-layout>
        </div>
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
                'setEditMode',
                'unsetEditMode',
                'setProjectTitle',
                'setNewProjectName'
            ]),
            ...mapActions('projects', [
                'createProject',
                'saveProject',
                'fetchProjects'
            ])
        },
        mounted() {
            this.fetchProjects();
        }
    }
</script>

<style scoped>
    .project {
        font-size: 24px;
    }

    .icon:hover {
        color: #333;
    }
</style>