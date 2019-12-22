<template>
    <div class="signIn">
        <v-btn to="/" absolute top left icon large>
            <v-icon large>keyboard_arrow_left</v-icon>
        </v-btn>

        <v-form ref="loginForm" v-model="isValid" lazy-validation>
            <v-text-field
                color="white"
                type="email"
                label="email"
                :rules="emailRules"
                v-model="email"
                solo
                rounded
                required
            />
            <v-text-field
                type="password"
                label="password"
                :rules="passwordRules"
                v-model="password"
                color="white"
                solo
                rounded
                required
            />
            <v-btn @click="handleSubmit" dark large block rounded color="#ff1744">
                sign in
            </v-btn>
        </v-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { USER } from '../../store-types/module-names'
import { SIGN_IN, IS_CURRENT_SESSION } from '../../store-types/actions-types'

export default {
    name: 'SignIn',
    mounted() {
        this.isCurrentSession()
    },
    data: () => ({
        email: '',
        password: '',
        emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
        passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 8) || 'Password must be at least 8 characters',
        ],
        isValid: false,
    }),
    methods: {
        ...mapActions(USER, {
            signIn: SIGN_IN,
            isCurrentSession: IS_CURRENT_SESSION,
        }),
        handleSubmit() {
            this.signIn({
                email: this.email,
                password: this.password,
            })
        },
        clearForm() {
            this.email = ''
            this.password = ''
        },
    },
}
</script>
