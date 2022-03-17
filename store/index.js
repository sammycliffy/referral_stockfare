import Vuex from 'vuex'
import Vue from 'vue'
import registerAction from './auth'
import agentDetails from './dashboard'



Vue.use(Vuex)

export default () => new Vuex.Store({
    // namespaced: true,
    state: () => ({

    }),
    mutations: {},
    actions: {},
    modules: {
        registerAction: registerAction,
        agentDetails: agentDetails
    }
})
