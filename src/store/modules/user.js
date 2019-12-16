import router from "../../router";
import { Auth } from "aws-amplify";

import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  IS_CURRENT_SESSION
} from "@/store-types/actions-types";

import { SET_AUTHENTICATION_STATUS } from "@/store-types/mutations-types";

export const actions = {
  [SIGN_IN]({ commit }, { email, password }) {
    return Auth.signIn(email, password)
      .then(() => {
        commit(SET_AUTHENTICATION_STATUS, true);
        router.push({ name: "home" });
      })
      .catch(error => {
        alert(error.message);
      });
  },
  [IS_CURRENT_SESSION]({ commit }) {
    return Auth.currentSession()
      .then(() => {
        commit(SET_AUTHENTICATION_STATUS, true);
        router.push({ name: "home" });
      })
      .catch(() => {
        router.push({ name: "login" });
      });
  },
  async [SIGN_UP]({ commit }, { email, password }) {
    try {
      await Auth.signUp(email, password);
      commit(SET_AUTHENTICATION_STATUS, false);
      alert("signed in");
    } catch (error) {
      alert(error.message);
    }
  },
  async [SIGN_OUT]() {
    try {
      await Auth.signOut();
      alert("logged out");
    } catch (error) {
      alert(error.message);
    }
  }
};

export const mutations = {
  [SET_AUTHENTICATION_STATUS](state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  }
};

export const state = () => ({
  isAuthenticated: false
});

export const namespaced = true;
