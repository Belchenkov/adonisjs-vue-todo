<template>
    <Panel title="Projects">
        <div
            class="mt-2 project"
            v-for="project in projects"
            :key="project.id"
        >
            <EditableRecord
                @onClick="projectClicked(project)"
                :isEditMode="project.isEditMode"
                :title="project.title"
                :record="project"
                @onInput="setProjectTitle({
                    project,
                    title: $event
                })"
                @onEdit="setEditMode(project)"
                @onSave="saveProject(project)"
                @onDelete="deleteProject(project)"
            />
        </div>
        <CreateRecord
            placeholder="Project Name is ..."
            icon="business_center"
            @onInput="setNewProjectName"
            :value="newProjectName"
            @create="createProject"
        />
    </Panel>
</template>

<script>
    import CreateRecord from './CreateRecord';
    import EditableRecord from './EditableRecord';
    import { mapMutations, mapState, mapActions } from 'vuex';

    export default {
        components: {
            CreateRecord,
            EditableRecord
        },
        computed: {
            ...mapState('projects', [
                'projects',
                'newProjectName'
            ])
        },
        methods: {
            ...mapMutations('projects', [
                'setEditMode',
                'setCurrentProject',
                'unsetEditMode',
                'setProjectTitle',
                'setNewProjectName'
            ]),
            ...mapActions('projects', [
                'createProject',
                'deleteProject',
                'saveProject',
                'fetchProjects'
            ]),
            ...mapActions('tasks', [
                'fetchTasksForProject'
            ]),
            projectClicked(project) {
                this.setCurrentProject(project);
                this.fetchTasksForProject(project);
            },
        },
        mounted() {
            this.fetchProjects();
        }
    }
</script>

<style scoped>
    .project {
        font-size: 24px;
        font-family: 'Pattaya', sans-serif;
    }

    .icon:hover {
        color: #333;
    }
</style>