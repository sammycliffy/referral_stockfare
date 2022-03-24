import api from '../lib/api'

const state = {
    dashboard: null,
    transaction: null,
    referral: null,
}


const getters = {
    dashboard(state) {
        return state.dashboard
    },
    transaction(state) {
        return state.transaction
    },
    referral(state) {
        return state.referral
    },


}

const actions = {


    agentDetails({ commit }) {
        api.apiGetting('api/v1/referral/profile/', '').then(({ data }) => {
            localStorage.profile = JSON.stringify(data);
            const details = JSON.parse(localStorage.profile)
            console.log(details)
            api.apiGetting('api/v1/referral/dashboard/', details.id).then(({ data }) => {

                commit("dashboard", data)
            })
            api.apiGetting('api/v1/referral/transaction-logs/', details.id).then(({ data }) => {
                console.log(data)
                commit("transaction", data.results)
            })
        })
    },

    withdrawFunds({ commit }, data) {
        const details = JSON.parse(localStorage.profile)
        api.apiCalling('api/v1/referral/withdrawal/' + details.id, data).then(({ data }) => {
            console.log(data)
        })
    },
    transactionsLogs({ commit }) {
        const details = JSON.parse(localStorage.profile)
        api.apiGetting('api/v1/referral/transaction-logs/', details.id).then(({ data }) => {
            console.log(data)
            commit("transaction", data.results)
        })
    },

    referralLogs({ commit }) {
        const details = JSON.parse(localStorage.profile)
        api.apiGetting('api/v1/referral/referral-logs/', details.id).then(({ data }) => {
            console.log(data)
            commit("referral", data.results)
        })
    }

}

const mutations = {
    loading(state, loading) {
        return state.loading
    },

    dashboard(state, dashboard) {
        return state.dashboard = dashboard
    },
    transaction(state, transaction) {
        return state.transaction = transaction
    },
    referral(state, referral) {
        return state.referral = referral
    }

}

export default {
    state,
    actions,
    mutations,
    getters
}