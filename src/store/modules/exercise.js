import { API } from 'aws-amplify'
import endpoints from '../../constants/endpoints'
import config from '../../config'
import { FETCH_EXERCISES } from '@/store-types/actions-types'
import { ADD_SET, SET_EXERCISES } from '@/store-types/mutations-types'
import { GET_EXERCISES, GET_SETS } from '@/store-types/getters-types'


export const actions = {
    [FETCH_EXERCISES]({ commit }) {
        return API.get(config.API_NAME, endpoints.listExercises)
            .then(res => {
              commit(SET_EXERCISES, res.Items)
            })
            .catch((error) => {
                console.error(error)
            })
    },
}

export const mutations = {
    [ADD_SET]: (state, set) => {
        set.createdAt = new Date()
        state.sets.push(set)
    },
    [SET_EXERCISES]: (state, exercises) => {
        state.exercises = exercises
    },
}

export const getters = {
    [GET_EXERCISES]: state => state.exercises,
    [GET_SETS]: state => exerciseSlug =>
        state.sets.filter(set => set.exercise.slug === exerciseSlug),
}

export const state = {
    exercises: [],
    sets: [],
}

export const namespaced = true
