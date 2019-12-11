<template>
  <div class="theExerciseListItem">
    <div class="theExerciseListItem__actions">
      <div class="actions__exercise">
        <v-btn
          block
          @click="isAddSetVisible = !isAddSetVisible"
        >
          {{ exercise.name }}
        </v-btn>
      </div>

      <div class="actions__stats">
        <v-btn
          block
          :to="`exercise/${exercise.slug}`"
        >
          <v-icon
            light
            large
          >
            insert_chart
          </v-icon>
        </v-btn>
      </div>
    </div>
    <TheExerciseSetForm
      v-if="isAddSetVisible"
      @submit="submitReps"
    />
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
  display: flex;
  flex-direction: column;
  margin: 1rem;

  &__actions {
    display: flex;
  }

  .actions {
    &__exercise {
      width: 20rem;
    }

    &__stats {
      width: 5rem;
      margin-left: 1rem;
    }
  }
}
</style>
