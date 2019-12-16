<template>
  <div class="theAddSetForm">
    <div class="theAddSetForm__number-input">
      10
    </div>
    <div class="theAddSetForm__input-controls">
      <div class="control-button">
        <i class="material-icons">add</i>
      </div>
      <div class="control-button">
        <v-icon
          large
          color="#000000"
        >
          remove
        </v-icon>
      </div>
    </div>
    <div class="theAddSetForm__submit-button">
      <i class="material-icons">check</i>
    </div>
  </div>
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
.theAddSetForm {
  margin-top: 1rem;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  width: 342px;
  height: 160px;
  padding: 1rem 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &__number-input {
    border-radius: 0.5rem;
    border: 2px solid #e5e5e5;
    background-color: #c4c4c4;
    height: 100%;
    width: 135px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: 900;
    color: #000000;
    letter-spacing: -3px;
  }

  &__input-controls {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    height: 100%;
    width: 90px;

    .control-button {
      border-radius: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(50% - 0.25rem);
      border: 2px solid #e5e5e5;
      background-color: #c4c4c4;

      i {
        font-size: 2rem;
        color: #000000;
      }
    }
  }

  &__submit-button {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    background-color: #2196f3;
    height: 100%;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      font-size: 4rem;
      color: #ffffff;
    }
  }
}
</style>
