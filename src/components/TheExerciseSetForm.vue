<template>
  <form class="theExerciseSetForm" @keyup.enter="submit">
    <v-text-field
      v-model="reps"
      label="nb reps"
      placeholder="10"
      type="number"
      :rules="[rules.min]"
      mask="###"
    >
    </v-text-field>

    <v-btn @click="submit">submit</v-btn>
  </form>
</template>

<script>
export default {
  name: "TheExerciseSetForm",
  data: () => ({
    reps: null,
    rules: {
      min: v => v > 0 || "You must do at least 1 rep"
    }
  }),
  methods: {
    submit() {
      this.$emit("submit", this.reps);
      this.reps = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.theExerciseSetForm {
}
</style>
