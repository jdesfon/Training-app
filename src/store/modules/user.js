import { Auth } from 'aws-amplify'
import router from '../../router'

import { SIGN_IN, SIGN_UP, SIGN_OUT, CONFIRM_EMAIL, IS_CURRENT_SESSION } from '../../store-types/actions-types'
import { SET_AUTHENTICATION_STATUS, SET_LOADING, SET_USER } from '../../store-types/mutations-types'
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
                commit('notification/NOTIFICATION_ERROR', error.message, { root: true })
            })
            .finally(() => {
                commit(SET_LOADING, false)
            })
    },
    [IS_CURRENT_SESSION]({ commit }, { redirect }) {
        commit(SET_LOADING, true)
        return Auth.currentSession()
            .then(() => {
                commit(SET_AUTHENTICATION_STATUS, true)
                if (redirect) {
                    router.push({ name: redirect })
                }
            })
            .finally(() => {
                commit(SET_LOADING, false)
            })
    },
    [SIGN_UP]({ commit }, { email, password }) {
        commit(SET_LOADING, true)
        return Auth.signUp(email, password)
            .then(() => {
                commit(SET_USER, { email, password })
                router.push({ name: 'confirm' })
            })
            .catch(error => {
                commit('notification/NOTIFICATION_ERROR', error.message, { root: true })
            })
            .finally(() => {
                commit(SET_LOADING, false)
            })
    },
    async [CONFIRM_EMAIL]({ commit, state }, confirmationCode) {
        commit(SET_LOADING, true)
        try {
            await Auth.confirmSignUp(state.user.email, confirmationCode)
            await Auth.signIn(state.user.email, state.user.password)
            commit(SET_AUTHENTICATION_STATUS, true)
            router.push({ name: 'home' })
        } catch (error) {
            commit(SET_AUTHENTICATION_STATUS, false)
            commit('notification/NOTIFICATION_ERROR', error.message, { root: true })
        } finally {
            commit(SET_LOADING, false)
        }
    },
    [SIGN_OUT]({ commit }) {
        commit(SET_LOADING, true)
        return Auth.signOut()
            .then(() => {
                commit(SET_AUTHENTICATION_STATUS, false)
                commit('notification/NOTIFICATION_SUCCESS', 'Logged out', { root: true })
                router.push({ name: 'landing' })
            })
            .catch(error => {
                commit('notification/NOTIFICATION_ERROR', error.message, { root: true })
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
    [SET_USER](state, { email, password }) {
        state.user.email = email
        state.user.password = password
    },
}

export const getters = {
    [GET_LOADING]: state => state.isLoading,
}

export const state = () => ({
    isAuthenticated: false,
    user: {
        email: null,
        password: null,
    },
    isLoading: false,
})

export const namespaced = true
