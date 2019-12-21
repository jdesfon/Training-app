<template>
    <div class="header">
        <v-btn v-if="nav" fab small depressed :to="to">
            <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <h1>{{ title }}</h1>

        <v-btn @click="handleSubmit" small fab depressed>
            <v-icon>power_settings_new</v-icon>
        </v-btn>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { USER } from '../store-types/module-names'
import { SIGN_OUT } from '../store-types/actions-types'

export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            default: () => '/',
        },
        nav: {
            type: Boolean,
            default: () => false,
        },
    },
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

<style lang="scss" scoped>
.header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #424242;
    border-bottom: 1px solid black;
    text-align: left;
    font-weight: 900;
    line-height: 3rem;
    text-transform: capitalize;
}
</style>
