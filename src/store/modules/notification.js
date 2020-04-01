import {
    NOTIFICATION_INFO,
    NOTIFICATION_SUCCESS,
    NOTIFICATION_ERROR,
    UPDATE_SNACKBAR,
} from '../../store-types/mutations-types'
import {
    GET_SNACKBAR,
    GET_SNACKBAR_MESSAGE,
    GET_SNACKBAR_TYPE,
    GET_SNACKBAR_TIMEOUT,
} from '../../store-types/getters-types'

const notificationTypes = Object.freeze({
    INFO: '#00B0FF',
    SUCCESS: '#00C853',
    ERROR: '#ff1744',
})

export const mutations = {
    [NOTIFICATION_INFO](state, message) {
        state.isVisible = true
        state.color = notificationTypes.INFO
        state.message = message
    },
    [NOTIFICATION_SUCCESS](state, message) {
        state.isVisible = true
        state.color = notificationTypes.SUCCESS
        state.message = message
    },
    [NOTIFICATION_ERROR](state, message) {
        state.isVisible = true
        state.color = notificationTypes.ERROR
        state.message = message
    },
    [UPDATE_SNACKBAR](state, snackbar) {
        state.isVisible = snackbar
    },
}

export const getters = {
    [GET_SNACKBAR]: state => state.isVisible,
    [GET_SNACKBAR_MESSAGE]: state => state.message,
    [GET_SNACKBAR_TYPE]: state => state.color,
    [GET_SNACKBAR_TIMEOUT]: state => state.timeout,
}

export const state = () => ({
    isVisible: false,
    message: '',
    timeout: 3000,
    color: null,
})

export const namespaced = true
