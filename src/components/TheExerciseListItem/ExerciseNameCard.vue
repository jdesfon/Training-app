<template>
  <div class="exerciseNameCard">
    <div class="exerciseNameCard__main">
      {{ exerciseName }}
    </div>
    <div class="exerciseNameCard__footer">
      <div class="footer__performance">
        last set 10 reps
      </div>
      <div class="footer__date">
        Dec 25th, 10:03
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    exerciseName: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.exerciseNameCard {
  width: 80%;
  height: 100%;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  &__main {
    height: calc(100% - 17px);
    padding: 0 10px;
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -1px;
    color: #424242;
    display: flex;
    align-items: center;
  }

  &__footer {
    color: #ffffff;
    background-color: #424242;
    display: flex;
    justify-content: space-between;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    font-size: 0.7rem;
    font-weight: 900;
    padding: 0 10px;
    height: 17px;
  }

  &:hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  }
}
</style>