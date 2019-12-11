<template>
  <div class="theExerciseListItem">
    <v-btn :to="`exercise/${exercise.slug}`">{{ exercise.name }}</v-btn>
    <v-btn fab small color="primary" @click="isAddSetVisible = true">
      <v-icon>add</v-icon>
    </v-btn>
    <TheExerciseSetForm v-if="isAddSetVisible" @submit="submitReps" />
  </div>
</template>

<script>
import TheExerciseSetForm from "@/components/TheExerciseSetForm";
import { mapMutations } from "vuex";
import { ADD_SET } from "@/store-types/mutations-types";
import { EXERCISE } from "@/store-types/module-names";

export default {
  name: "TheExerciseListItem",
  components: { TheExerciseSetForm },
  props: {
    exercise: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isAddSetVisible: false
  }),
  methods: {
    ...mapMutations(EXERCISE, {
      addSet: ADD_SET
    }),
    submitReps(reps) {
      this.addSet({
        exercise: this.exercise,
        reps
      });

      this.isAddSetVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.theExerciseListItem {
}
</style>
