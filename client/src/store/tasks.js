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
    }
}