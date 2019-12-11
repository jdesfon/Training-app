<template>
  <div class="theExerciseSetForm" @keyup.enter="onSubmit">
    <v-text-field
      v-model="reps"
      label="nb reps"
      placeholder="10"
      type="number"
      :rules="[rules.min]"
      mask="###"
      autofocus
    >
    </v-text-field>

    <v-btn @click="onSubmit">submit</v-btn>
  </div>
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
    onSubmit() {
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
