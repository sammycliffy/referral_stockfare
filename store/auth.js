import api from '../lib/api'
import firebase from 'firebase/compat';
import error_handler from '../lib/helpers/error_handler'
const state = {
    loading: false,
    error: '',
}


const getters = {
    loading(state) {
        return state.loading
    },
    error(state) {
        return state.error
    }
}

const actions = {
    registerAction({ commit }, data) {
        data.phone_number =
            "+234" + data.phone_number.substring(1);
        commit('loading', true);

        api.http().post('api/v1/referral/signup/', data).then((response) => {
            console.log(response)
            if (response.status === 200) {
                commit('loading', false);
                console.log(response);
                this.$router.push('/dashboard')
            }
        }).catch((error) => {
            commit('loading', false);
            console.log(error.response)
            const error_ = error_handler.errorHandler(error.response.data)
            console.log(error_)
            commit("error", error_);
        })
    },

    loginAction({ commit }, { email, password }) {
        commit('loading', true);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response)
                commit('loading', false);
                localStorage.user = JSON.stringify(response);
                this.$router.push('/dashboard')

            })
            .catch((error) => {
                commit("loading", false)
                console.log(error)
                commit('error', error);
            });

    }
}

const mutations = {
    loading(state, loading) {
        return state.loading = loading
    },

    error(state, error) {
        return state.error = error
    }

}

export default {
    state,
    actions,
    mutations,
    getters
}