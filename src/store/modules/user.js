import { Auth } from 'aws-amplify'
import router from '../../router'

import { SIGN_IN, SIGN_UP, SIGN_OUT, IS_CURRENT_SESSION } from '../../store-types/actions-types'
import { SET_AUTHENTICATION_STATUS, SET_LOADING } from '../../store-types/mutations-types'
import { GET_LOADING } from '../../store-types/getters-types'

export const actions = {
    [SIGN_IN]({ commit }, { email, password }) {
        commit(SET_LOADING, true)
        return Auth.signIn(email, password)
            .then(() => {
                commit(SET_AUTHENTICATION_STATUS, true)
                router.push({ name: 'home' })
            })
            .catch(error => {
                console.error(error.message)
            })
            .finally(() => {
                commit(SET_LOADING, false)
            })
    },
    [IS_CURRENT_SESSION]({ commit }) {
        commit(SET_LOADING, true)
        return Auth.currentSession()
            .then(() => {
                commit(SET_AUTHENTICATION_STATUS, true)
                router.push({ name: 'home' })
            })
            .catch(() => {
                router.push({ name: 'landing' })
            })
            .finally(() => {
                commit(SET_LOADING, false)
            })
    },
    [SIGN_UP]({ commit }, { email, password }) {
        commit(SET_LOADING, true)
        return Auth.signUp(email, password)
            .then(() => {
                commit(SET_AUTHENTICATION_STATUS, false)
                console.log('signed in')
            })
            .catch(error => {
                console.error(error.message)
            })
            .finally(() => {
                commit(SET_LOADING, false)
            })
    },
    [SIGN_OUT]({ commit }) {
        commit(SET_LOADING, true)
        return Auth.signOut()
            .then(() => {
                console.log('logged out')
            })
            .catch(error => {
                console.error(error.message)
            })
            .finally(() => {
                commit(SET_LOADING, false)
            })
    },
}

export const mutations = {
    [SET_AUTHENTICATION_STATUS](state, isAuthenticated) {
        state.isAuthenticated = isAuthenticated
    },
    [SET_LOADING](state, isLoading) {
        state.isLoading = isLoading
    },
}

export const getters = {
    [GET_LOADING]: state => state.isLoading,
}

export const state = () => ({
    isAuthenticated: false,
    isLoading: false,
})

export const namespaced = true
