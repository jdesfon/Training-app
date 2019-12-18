<template>
  <div class="theExerciseListItem">
    <ExerciseNameCard :exercise-name="exercise.name" />
    <ExerciseStatsButton />
  </div>
</template>

<script>
import ExerciseNameCard from "./ExerciseNameCard";
import ExerciseStatsButton from "./ExerciseStatsButton";
import { mapMutations } from "vuex";
import { ADD_SET } from "@/store-types/mutations-types";
import { EXERCISE } from "@/store-types/module-names";

export default {
  name: "ExerciseListItem",
  props: {
    exercise: {
      type: Object,
      default: () => ({
        name: "Push ups"
      })
    }
  },
  components: {
    ExerciseNameCard,
    ExerciseStatsButton
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
  margin-top: 1rem;
  width: 342px;
  height: 74px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
