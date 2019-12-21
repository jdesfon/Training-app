<template>
    <div class="signUpConfirm">
        <v-btn to="/" absolute top left icon large>
            <v-icon large>keyboard_arrow_left</v-icon>
        </v-btn>

        <v-form ref="verificationForm" lazy-validation>
            <v-text-field
                color="white"
                type="text"
                label="verification code"
                v-model="verificationCode"
                solo
                rounded
                required
            />
            <v-btn @click="handleSubmit" dark large block rounded color="#ff1744">
                submit
            </v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'SignUpConfirm',
    data: () => ({
        verificationCode: null,
    }),
    methods: {
        handleSubmit() {},
    },
}
</script>
