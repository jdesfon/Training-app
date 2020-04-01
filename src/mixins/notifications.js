import { mapMutations } from 'vuex'
import { NOTIFICATION } from '../store-types/module-names'
import { NOTIFICATION_INFO, NOTIFICATION_SUCCESS, NOTIFICATION_ERROR } from '../store-types/mutations-types'

export default {
    methods: {
        ...mapMutations(NOTIFICATION, {
            notifyInfo: NOTIFICATION_INFO,
            notifySuccess: NOTIFICATION_SUCCESS,
            notifyError: NOTIFICATION_ERROR,
        }),
    },
}
