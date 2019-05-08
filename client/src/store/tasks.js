import HTTP from "../http";
import Vue from "vue";

export default {
    namespaced: true,
    state: {
        tasks: [],
        newTaskName: null,
    },
    actions: {
        fetchTasksForProject({commit}, project) {
            return HTTP().get(`projects/${project.id}/tasks`)
                .then(({ data }) => {
                    console.log(data);
                commit('setTasks', data);
            })
            .catch((e) => {
                console.log(e);
            });
        },
        createTask({commit, state, rootState}) {
            return HTTP().post(`projects/${rootState.projects.currentProject.id}/tasks`, {
                description: state.newTaskName
            })
                .then(({ data }) => {
                commit('appendTask', data);
                commit('setNewTaskName', null);
            })
            .catch((e) => {
                console.log(e);
            });
        },
        saveTask({commit}, task) {
            return HTTP().patch(`tasks/${task.id}`, task)
                .then(() => {
                    commit('unsetEditMode', task);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        deleteTask({ commit }, task) {
            console.log(task);
            return HTTP().delete(`tasks/${task.id}`)
                .then(() => {
                    commit('removeTask', task);
                });
        },
    },
    getters: {

    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        appendTask(state, task) {
            state.tasks.push(task);
        },
        setNewTaskName(state, newTaskName) {
            state.newTaskName = newTaskName;
        },
        setTaskDescription(state, { task, description }) {
            task.description = description;
        },
        setEditMode(state, task) {
            Vue.set(task, 'isEditMode', true);
        },
        unsetEditMode(state, task) {
            Vue.set(task, 'isEditMode', false);
        },
        removeTask(state, task) {
            state.tasks.splice(state.tasks.indexOf(task), 1);
        }
    }
}