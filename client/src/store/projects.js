import HTTP from "../http";
import Vue from "vue";

export default {
    namespaced: true,
    state: {
        projects: [],
        newProjectName: null,
    },
    actions: {
        fetchProjects({commit}) {
            return HTTP().get('/projects')
                .then(({ data }) => {
                commit('setProjects', data);
            })
            .catch((e) => {
                console.log(e);
            });
        },
        createProject({commit, state}) {
            return HTTP().post('/projects', {
                title: state.newProjectName
            }).then(({ data }) => {
                commit('appendProject', data);
                commit('setNewProjectName', null);
            })
            .catch((e) => {
                console.log(e);
            });
        },
        saveProject({commit}, project) {
            return HTTP().patch(`/projects/${project.id}`, project)
                .then(() => {
                    commit('unsetEditMode', project);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        deleteProject({commit}, project) {
            return HTTP().delete(`/projects/${project.id}`)
                .then(() => {
                    commit('removeProject', project);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    getters: {

    },
    mutations: {
        setProjects(state, projects) {
            state.projects = projects;
        },
        appendProject(state, project) {
            state.projects.push(project);
        },
        setNewProjectName(state, name) {
            state.newProjectName = name;
        },
        setProjectTitle(state, { project, title }) {
            project.title = title;
        },
        setEditMode(state, project) {
            Vue.set(project, 'isEditMode', true);
        },
        unsetEditMode(state, project) {
            Vue.set(project, 'isEditMode', false);
        },
        removeProject(state, project) {
            state.projects.splice(state.projects.indexOf(project), 1);
        }
    }
}