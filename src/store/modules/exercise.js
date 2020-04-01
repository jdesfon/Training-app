import { API } from 'aws-amplify'
import endpoints from '../../constants/endpoints'
import config from '../../config'
import {
    FETCH_EXERCISES,
    CREATE_SET,
    UPDATE_SET,
    DELETE_SET,
    LIST_SETS,
    LAST_SET,
} from '../../store-types/actions-types'
import { ADD_SET, SET_SETS, SET_EXERCISES, SET_LAST_SET } from '../../store-types/mutations-types'
import { GET_EXERCISES, GET_SETS, GET_LAST_SET } from '../../store-types/getters-types'

export const actions = {
    [FETCH_EXERCISES]({ dispatch, commit, state }) {
        if (!state.exercises.length) {
            return API.get(config.API_NAME, endpoints.listExercises)
                .then(res => {
                    const exercises = res.Items
                    commit(SET_EXERCISES, exercises)
                    exercises.map(exercise => dispatch(LAST_SET, exercise.exerciseId))
                })
                .catch(error => {
                    commit('notification/NOTIFICATION_ERROR', error.message, { root: true })
                })
        }
        return 'done'
    },
    [LAST_SET]({ commit }, exerciseId) {
        return API.get(config.API_NAME, endpoints.lastSet(exerciseId)).then(res => {
            commit(SET_LAST_SET, { exerciseId, lastSet: res[0] })
            return res
        })
    },
    [CREATE_SET]({ dispatch, commit }, { exerciseId, reps }) {
        return API.post(config.API_NAME, endpoints.createSet, { body: { exerciseId, reps } })
            .then(() => {
                dispatch(LIST_SETS, { exerciseId })
                commit('notification/NOTIFICATION_SUCCESS', 'Good Job!', { root: true })
            })
            .catch(error => {
                commit('notification/NOTIFICATION_ERROR', error.message, { root: true })
            })
    },
    [UPDATE_SET]({ commit }, { setId, reps }) {
        return API.put(config.API_NAME, endpoints.updateSet(setId), {
            body: {
                reps,
            },
        }).catch(error => {
            commit('notification/NOTIFICATION_ERROR', error.message, { root: true })
        })
    },
    [DELETE_SET]({ commit }, { setId }) {
        return API.del(config.API_NAME, endpoints.deleteSet(setId)).catch(error => {
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
    [SET_LAST_SET]: (state, { exerciseId, lastSet }) => {
        const lastSetIndex = state.lastSets.findIndex(set => {
            return !!set && set.exerciseId === exerciseId
        })
        if (lastSetIndex > -1) {
            state.lastSets.splice(lastSetIndex, 1, lastSet)
        } else {
            state.lastSets.push(lastSet)
        }
    },
}

export const getters = {
    [GET_EXERCISES]: state => state.exercises,
    [GET_SETS]: state => exerciseId => state.sets[exerciseId],
    [GET_LAST_SET]: state => exerciseId => {
        return state.lastSets.find(set => !!set && set.exerciseId === exerciseId)
    },
}

export const state = () => ({
    exercises: [],
    sets: {},
    lastSets: [],
})

export const namespaced = true
