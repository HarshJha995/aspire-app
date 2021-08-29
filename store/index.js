import { createStore } from 'vuex';

export default createStore({
    state: {
        loanApplied: false,
        userData: {}
    },
    mutations: {
        setLoanStatus(state, val) {
            state.loanApplied = val;
        },
        setUserData(state, obj) {
            state.userData = obj;
        }
    },
    actions: {
        setLoanStatus({ commit }, val) {
            commit('setLoanStatus', val)
        },
        setUserData({ commit }, obj) {
            commit('setUserData', obj)
        }
    },

    getters: {
        getLoanStatus(state) {
            return state.loanApplied
        },
        getUserData(state) {
            return state.userData
        }
    }
})