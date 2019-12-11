<template>
  <v-form
    ref="exerciseSetForm"
    v-model="isValid"
    class="theExerciseSetForm"
    :lazy-validation="lazy"
  >
    <v-text-field
      v-model="reps"
      label="nb reps"
      placeholder="10"
      type="number"
      :rules="[rules.min, rules.required]"
      mask="###"
      autofocus
    />

    <v-btn
      :disabled="!isValid"
      @click="onSubmit"
    >
      submit
    </v-btn>
  </v-form>
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
