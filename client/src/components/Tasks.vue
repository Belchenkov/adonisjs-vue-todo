<template>
    <Panel title="Tasks">
        <div
                class="my-2 tasks"
                v-for="task in tasks"
                :key="task.id"
        >
            <EditableRecord
                    @onClick="projectClicked(project)"
                    :isEditMode="task.isEditMode"
                    :title="task.description"
                    @onInput="setTaskDescription({
                    task,
                    description: $event
                })"
                    @onEdit="setEditMode(task)"
                    @onSave="saveTask(task)"
                    @onDelete="deleteTask(task)"
            >
                <v-icon
                        @click="checkClicked(task)"
                        class="cursor mr-2">
                    {{ task.completed ? 'check_box': 'check_box_outline_blank' }}
                </v-icon>
            </EditableRecord>
        </div>
        <CreateRecord
                placeholder="I need to..."
                @onInput="setNewTaskName"
                icon="playlist_add"
                :value="newTaskName"
                @create="createTask"
        />
    </Panel>
</template>

<script>
    import { mapMutations, mapState, mapActions } from 'vuex';
    import CreateRecord from './CreateRecord';
    import EditableRecord from './EditableRecord';

    export default {
        components: {
            CreateRecord,
            EditableRecord
        },
        computed: {
            ...mapState('tasks', [
                'tasks',
                'newTaskName'
            ])
        },
        methods: {
            checkClicked(task) {
                this.toggleCompleted(task);
                this.saveTask(task);
            },
            ...mapMutations('tasks', [
                'setNewTaskName',
                'toggleCompleted',
                'setTaskDescription',
                'setEditMode'
            ]),
            ...mapActions('tasks', [
                'createTask',
                'saveTask',
                'deleteTask'
            ])
        }
    }
</script>

<style scoped>

</style>