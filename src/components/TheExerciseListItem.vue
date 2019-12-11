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
    submitReps(reps) {
      console.log(`Users submitted ${reps} reps on this ${this.exercise.name}`);
      this.isAddSetVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.theExerciseListItem {
}
</style>
