import { Auth } from 'aws-amplify'

import {
    SIGN_IN,
    SIGN_UP,
    SIGN_OUT
} from '@/store-types/actions-types'

import {
    SET_USER,
    REMOVE_USER
} from '@/store-types/mutations-types'

export const actions = {
    async [SIGN_IN]({commit}, { email, password }) {
        try {
            const user = await Auth.signIn(email, password)
            commit(SET_USER, user)
            alert('logged in')
        } catch (error) {
            alert(error.message)
        }
    },
    async [SIGN_UP]({commit}, { email, password }) {
        try {
            const user = await Auth.signUp(email, password)
            commit(SET_USER, user)
            alert('signed in')
        } catch (error) {
            alert(error.message)
        }
    },
    async [SIGN_OUT]({ commit }) {
        try {
            await Auth.signOut()
            alert('logged out')
        } catch (error) {
            alert(error.message)
        }
    },
}

export const mutations = {
    [SET_USER](state, user) {
        state.user = user
        state.isAuthenticated = true
    },
    [REMOVE_USER](state) {
        state.user = null
        state.isAuthenticated = false
    }
}

export const state = () => ({
    user: null,
    isAuthenticated: false,
})

export const namespaced = true
