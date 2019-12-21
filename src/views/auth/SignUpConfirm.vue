<template>
    <div class="signUpConfirm">
        <v-btn to="/" absolute top left icon large>
            <v-icon large>keyboard_arrow_left</v-icon>
        </v-btn>

        <v-form ref="verificationForm" @keyup.enter="handleSubmit" v-model="isValid" lazy-validation>
            <v-text-field
                color="white"
                type="text"
                :mask="'######'"
                :rules="verificationCodeRules"
                label="verification code"
                v-model="verificationCode"
                solo
                rounded
                required
            />

            <v-btn @click="handleSubmit" :disabled="!isValid" large block rounded color="#ff1744">
                <span class="button-text">submit</span>
            </v-btn>
        </v-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { USER } from '../../store-types/module-names'
import { CONFIRM_EMAIL } from '../../store-types/actions-types'
import notifications from '../../mixins/notifications'

export default {
    name: 'SignUpConfirm',
    mixins: [notifications],
    data: () => ({
        verificationCode: null,
        verificationCodeRules: [
            v => !!v || 'Code is required',
            v => (v && v.length === 6) || 'Code must be 6 characters long',
        ],
        isValid: true,
    }),
    methods: {
        ...mapActions(USER, {
            confirmEmail: CONFIRM_EMAIL,
        }),
        handleSubmit() {
            if (this.$refs.verificationForm.validate()) {
                this.confirmEmail(this.verificationCode)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.signUpConfirm {
    fieldset {
        border: none;
        display: flex;
        width: 300px;
    }

    input {
        height: 4rem;
        width: 2rem;
        border: 2px solid #9e9e9e;
        border-radius: 0.5rem;
        margin: 0 0.25rem;
        text-align: center;
    }

    /*
        Chrome, Safari, Edge, Opera
        Remove spinners
     */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /*
        Firefox
        remove spinners
    */
    input[type='number'] {
        -moz-appearance: textfield;
    }

    .button-text {
        color: #ffffff;
    }
}
</style>
