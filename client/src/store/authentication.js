import router from '../router';
import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        registerEmail: null,
        registerPassword: null,
        registerError: null,
        loginEmail: null,
        loginPassword: null,
        loginError: null,
        token: null
    },
    mutations: {
        setRegisterEmail(state, email) {
            state.registerEmail = email;
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password;
        },
        setRegisterError(state, error) {
            state.registerError = error;
        },
        setLoginEmail(state, email) {
            state.loginEmail = email;
        },
        setLoginPassword(state, password) {
            state.loginPassword = password;
        },
        setLoginError(state, error) {
            state.loginError = error;
        },
        setToken(state, token) {
            state.token = token;
        },
        clearRegisterFields(state) {
            state.registerEmail = null;
            state.registerPassword = null;
        },
        clearLoginFields(state) {
            state.loginEmail = null;
            state.loginPassword = null;
        }
    },
    actions: {
        register({commit, state}) {
            commit('setRegisterError', null);
            return HTTP().post('/auth/register', {
                email: state.registerEmail,
                password: state.registerPassword
            }).then(({ data }) => {
                commit('setToken', data.token);
                commit('clearRegisterFields');
                router.push('/');
            })
            .catch((e) => {
                commit('setRegisterError', 'An error has occured trying to create your account.')
            });
        },
        login({commit, state}) {
            commit('setLoginError', null);
            return HTTP().post('/auth/login', {
                email: state.loginEmail,
                password: state.loginPassword
            }).then(({ data }) => {
                commit('setToken', data.token);
                commit('clearLoginFields');
                router.push('/');
            })
            .catch((e) => {
                commit('setLoginError', 'An error has occured trying to login.')
            });
        },
        logout({commit}) {
            commit('setToken', null);
            router.push('/login');
        }
    },
    getters: {
        isLoggedIn(state) {
            return !!state.token;
        }
    }
}
