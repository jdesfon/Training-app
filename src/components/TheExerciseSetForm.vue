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
    isValid: false,
    rules: {
      min: v => v > 0 || "You must do at least 1 rep",
      required: v => !!v || "a value is required"
    }
  }),
  methods: {
    onSubmit() {
      this.$emit("submit", this.reps);
      this.$refs.exerciseSetForm.clear();
    }
  }
};
</script>

<style lang="scss" scoped>
.theExerciseSetForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}
</style>
