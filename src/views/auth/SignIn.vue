<template>
  <v-form
    ref="loginForm"
    v-model="isValid"
    lazy-validation
  >
    <v-text-field
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
      solo
      rounded
      required
    />
    <v-btn
      dark
      large
      block
      rounded
    >
      login
    </v-btn>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
import { USER } from "@/store-types/module-names";
import { SIGN_IN, IS_CURRENT_SESSION } from "@/store-types/actions-types";

export default {
  name: "SignIn",
  mounted() {
  // this.isCurrentSession();
  },
  data: () => ({
    email: "",
    password: "",
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Name must be at least 8 characters',
    ],
    isValid: false
  }),
  methods: {
    ...mapActions(USER, {
      signIn: SIGN_IN,
      isCurrentSession: IS_CURRENT_SESSION
    }),
    handleSubmit() {
      this.signIn({
        email: this.email,
        password: this.password
      });
      this.clearForm();
    },
    clearForm() {
      this.email = "";
      this.password = "";
    }
  }
};
</script>
