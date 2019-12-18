<template>
  <div class="login">
    <v-progress-circular
      v-if="isLoading"
      indeterminate
      :size="72"
      :width="12"
    />
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { USER } from "@/store-types/module-names";
import { GET_LOADING } from "@/store-types/getters-types";

export default {
  name: "Auth",
  computed: {
    ...mapGetters(USER, {
      isLoading: GET_LOADING
    })
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
