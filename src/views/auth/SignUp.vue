<template>
    <div class="signUp">
        <v-btn to="/" absolute top left icon large>
            <v-icon large>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-form ref="loginForm" v-model="isValid" lazy-validation>
            <v-text-field
                id="email"
                type="email"
                placeholder="email"
                :rules="emailRules"
                v-model="email"
                autofocus
                rounded
                solo
                required
            />

            <v-text-field
                id="password"
                label="password"
                type="password"
                :rules="passwordRules"
                v-model="password"
                rounded
                solo
                required
            />

            <v-text-field
                type="password"
                label="confirm password"
                :rules="passwordConfirmRules"
                v-model="passwordConfirm"
                rounded
                solo
                required
            />

            <v-btn color="#ff1744" dark rounded large block>
                sign up
            </v-btn>
        </v-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { USER } from '../../store-types/module-names'
import { SIGN_UP } from '../../store-types/actions-types'

export default {
    name: 'SignUp',
    data: () => ({
        email: '',
        password: '',
        passwordConfirm: '',
        emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
        passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 8) || 'Name must be at least 8 characters',
        ],
        passwordConfirmRules: [v => !!v || 'Confirm password is required'],
        isValid: false,
    }),
    methods: {
        ...mapActions(USER, {
            signUp: SIGN_UP,
        }),
        handleSubmit() {
            if (this.password === this.passwordConfirm) {
                this.signUp({
                    email: this.email,
                    password: this.password,
                })
                this.clearForm()
            }
        },
        clearForm() {
            this.email = ''
            this.password = ''
            this.passwordConfirm = ''
        },
    },
}
</script>
