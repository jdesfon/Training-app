import { API } from 'aws-amplify'
import endpoints from '../../constants/endpoints'
import config from '../../config'
import { FETCH_EXERCISES, CREATE_SET, LIST_SETS } from '../../store-types/actions-types'
import { ADD_SET, SET_SETS, SET_EXERCISES } from '../../store-types/mutations-types'
import { GET_EXERCISES, GET_SETS } from '../../store-types/getters-types'

export const actions = {
    [FETCH_EXERCISES]({ commit, state }) {
        if (!state.exercises.length) {
            return API.get(config.API_NAME, endpoints.listExercises)
                .then(res => {
                    commit(SET_EXERCISES, res.Items)
                })
                .catch(error => {
                    commit('notification/NOTIFICATION_ERROR', error.message, { root: true })
                })
        }
        return 'done'
    },
    [CREATE_SET]({ commit }, { exerciseId, reps }) {
        return API.post(config.API_NAME, endpoints.createSet, { body: { exerciseId, reps } })
            .then(() => {
                commit('notification/NOTIFICATION_SUCCESS', 'great!', { root: true })
            })
            .catch(error => {
                commit('notification/NOTIFICATION_ERROR', error.message, { root: true })
            })
    },
    [LIST_SETS]({ commit }, { exerciseId }) {
        return API.get(config.API_NAME, endpoints.listSets(exerciseId))
            .then(res => {
                const { items, stats } = res
                commit(SET_SETS, { exerciseId, items, stats })
            })
            .catch(error => {
                commit('notification/NOTIFICATION_ERROR', error.message, { root: true })
            })
    },
}

export const mutations = {
    [ADD_SET]: (state, set) => {
        set.createdAt = new Date()
        state.sets.push(set)
    },
    [SET_SETS]: (state, { exerciseId, items, stats }) => {
        state.sets[exerciseId] = { items, stats }
    },
    [SET_EXERCISES]: (state, exercises) => {
        state.exercises = exercises
    },
}

export const getters = {
    [GET_EXERCISES]: state => state.exercises,
    [GET_SETS]: state => exerciseId => state.sets[exerciseId],
}

export const state = () => ({
    exercises: [],
    sets: {},
})

export const namespaced = true
