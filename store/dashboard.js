import api from '../lib/api'

const state = {
    data: null,
    transaction: null,
}


const getters = {
    data(state) {
        return state.data
    },
    data(state) {
        return state.transaction
    }

}

const actions = {


    agentDetails({ commit }) {
        api.apiGetting('api/v1/referral/profile/', '').then(({ data }) => {
            localStorage.profile = JSON.stringify(data);
            const details = JSON.parse(localStorage.profile)
            console.log(details)
            api.apiGetting('api/v1/referral/dashboard/', details.id).then(({ data }) => {
                console.log(data)
                commit("data", data)
            })
            api.apiGetting('api/v1/referral/transaction-logs/', details.id).then(({ data }) => {
                console.log(data)
                commit("transaction", data.results)
            })
        })
    },


}

const mutations = {
    loading(state, loading) {
        return state.loading
    },

    data(state, data) {
        return state.data = data
    },
    transaction(state, transaction) {
        return state.transaction = transaction
    }

}

export default {
    state,
    actions,
    mutations,
    getters
}