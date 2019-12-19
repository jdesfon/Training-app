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
  //background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
  background-blend-mode: multiply;
  
  // background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
  
  // background: linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%);
  // background-blend-mode: normal,color-burn;

  // background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
