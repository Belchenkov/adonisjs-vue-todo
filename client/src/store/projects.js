import HTTP from "../http";
import router from "../router";

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
        }
    }
}