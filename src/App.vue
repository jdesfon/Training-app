<template>
    <div id="app">
        <router-view />
        <v-snackbar v-model="isSnackbarVisible" bottom vertical :color="color" :timeout="timeout">
            {{ text }}
        </v-snackbar>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { NOTIFICATION } from './store-types/module-names'
import { UPDATE_SNACKBAR } from './store-types/mutations-types'
import {
    GET_SNACKBAR,
    GET_SNACKBAR_MESSAGE,
    GET_SNACKBAR_TYPE,
    GET_SNACKBAR_TIMEOUT,
} from './store-types/getters-types'

export default {
    name: 'App',
    methods: {
        ...mapMutations(NOTIFICATION, {
            updateSnackbar: UPDATE_SNACKBAR,
        }),
    },
    computed: {
        ...mapGetters(NOTIFICATION, {
            snackbar: GET_SNACKBAR,
            text: GET_SNACKBAR_MESSAGE,
            color: GET_SNACKBAR_TYPE,
            timeout: GET_SNACKBAR_TIMEOUT,
        }),
        isSnackbarVisible: {
            get() {
                return this.snackbar
            },
            set() {
                this.updateSnackbar(false)
            },
        },
    },
}
</script>
