<template>
  <div class="login">
    <h1 class="app-title">
      Fitness tracker
    </h1>

    <form
      class="login-form"
      @submit.prevent="handleSubmit"
    >
      <label
        class="form-label"
        for="email"
      >email</label>
      <input
        class="form-input form-input__text"
        id="email"
        type="email"
        name="email"
        v-model="email"
      />

      <label
        class="form-label"
        for="password"
      >password</label>
      <input
        class="form-input form-input__text"
        id="password"
        type="password"
        name="password"
        v-model="password"
      />

      <v-btn
        class="login-form__button"
        @click="handleSubmit"
      >
        <span class="text-lowercase">login</span>
      </v-btn>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { USER } from "@/store-types/module-names";
import { SIGN_IN, IS_CURRENT_SESSION } from "@/store-types/actions-types";

export default {
  mounted() {
    this.isCurrentSession();
  },
  data: () => ({
    email: "",
    password: ""
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

<style lang="scss" scoped>
.login {
  h1.app-title {
    position: absolute;
    top: 3rem;
    left: 3.5rem;
    color: #ffffff;
  }
}

.login-form {
  z-index: 4;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  &__button {
    font-weight: 800;
    color: #ffffff;
    border: none;
    background-color: hsla(348, 100%, 55%, 1) !important;
    font-size: 1.4rem !important;
    height: 43px !important;
    border-radius: 0.5rem !important;
    text-transform: lowercase !important;
    letter-spacing: 0 !important;
  }

  .form-label {
    color: #424242;
    font-weight: 600;
    padding-bottom: 0.2rem;
  }

  .form-input {
    margin-bottom: 1rem;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);

    &__text {
      border-radius: 0.5rem;
      border-style: solid;
      border-width: 1px;
      height: 2.6rem;
      padding: 0.4rem;
    }

    &:focus,
    &:active {
      outline: none;
      border-radius: 0.7rem;
      border-width: 1.5px;
      border-style: solid;
      border-color: hsla(348, 100%, 55%, 0.7);
    }
  }
}
</style>
