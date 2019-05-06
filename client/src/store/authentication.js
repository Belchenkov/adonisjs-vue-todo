import router from '../router';
import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        registerEmail: null,
        registerPassword: null,
        registerError: null,
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
        setToken(state, token) {
            state.token = token;
        },
        clearRegisterFields(state) {
            state.registerEmail = null;
            state.registerPassword = null;
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
