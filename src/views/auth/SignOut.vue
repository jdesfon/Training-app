<template>
    <div class="signOut">
        <v-btn to="/" absolute top left icon large>
            <v-icon large>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-btn @click="handleSubmit">sign out</v-btn>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { USER } from '../../store-types/module-names'
import { SIGN_OUT } from '../../store-types/actions-types'

export default {
    name: 'SignOut',
    methods: {
        ...mapActions(USER, {
            signOut: SIGN_OUT,
        }),
        handleSubmit() {
            this.signOut()
        },
    },
}
</script>

<style scoped></style>
