<template>
  <div class="home">
    <!-- Exercise list -->
    <template v-for="exercise of exercises">
      <div :key="exercise.uid">
        <v-btn :to="`exercise/${exercise.slug}`">{{ exercise.name }}</v-btn>
        <v-btn fab small color="primary" @click="isSetDialogVisible = true">
          <v-icon>add</v-icon>
        </v-btn>
      </div>
    </template>

    <!-- Modal -->
    <v-dialog v-model="isSetDialogVisible" width="600">
      <div class="setDialog">
        <p>I'm a set dialog</p>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { EXERCISE } from "@/store-types/module-names";
import { GET_EXERCISES } from "@/store-types/getters-types";

export default {
  name: "Home",
  data() {
    return {
      isSetDialogVisible: false
    };
  },
  computed: {
    ...mapGetters(EXERCISE, {
      exercises: GET_EXERCISES
    })
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 1rem;
}

.setDialog {
  background-color: #ffffff;
  height: 100%;
}
</style>
