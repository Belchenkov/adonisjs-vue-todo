<template>
    <Panel title="Tasks">
        <div
                class="mt-2 tasks"
                v-for="task in tasks"
                :key="task.id"
        >
            {{task.description}}
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

    export default {
        components: {
            CreateRecord
        },
        computed: {
            ...mapState('tasks', [
                'tasks',
                'newTaskName'
            ])
        },
        methods: {
            ...mapMutations('tasks', [
                'setNewTaskName'
            ]),
            ...mapActions('tasks', [
                'createTask'
            ])
        }
    }
</script>

<style scoped>
    .tasks {
        font-size: 18px;
    }
</style>