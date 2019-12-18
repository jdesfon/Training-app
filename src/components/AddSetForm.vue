<template>
  <div class="theAddSetForm">
    <input
      class="theAddSetForm__number-input"
      type="number"
      v-model="reps"
    />
    <div class="theAddSetForm__input-controls">
      <button
        class="control-button grey-ripple"
        @click="increaseReps"
      >
        <i class="material-icons">add</i>
      </button>
      <button
        class="control-button grey-ripple"
        :disabled="reps < 1"
        @click="decreaseReps"
      >
        <v-icon
          large
          color="#000000"
        >
          remove
        </v-icon>
      </button>
    </div>
    <button class="theAddSetForm__submit-button blue-ripple">
      <i class="material-icons">check</i>
    </button>
  </div>
</template>

<script>
export default {
  name: "AddSetForm",
  data: () => ({
    reps: 0,
    isValid: false
  }),
  methods: {
    increaseReps() {
      if (this.reps < 10000) {
        this.reps += 1;
      }
    },
    decreaseReps() {
      if (this.reps > 0) {
        this.reps -= 1;
      }
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
    cursor: pointer;
    outline: none;
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
    text-align: center;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  &__input-controls {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    height: 100%;
    width: 90px;

    .control-button {
      outline: none;
      border: none;
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

      &:disabled {
        background-color: #eeeeee;
      }
    }
  }

  &__submit-button {
    outline: none;
    border: none;
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
