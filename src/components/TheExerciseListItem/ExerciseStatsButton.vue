<template>
  <div class="exerciseStatsButton">
    <div class="exerciseStatsButton__icon">
      <v-icon
        large
        color="#ff1744"
      >
        trending_up
      </v-icon>
    </div>
    <div class="exerciseStatsButton__text">
      stats
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.exerciseStatsButton {
  height: 100%;
  width: 68px;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;

  &__icon {
    height: calc(100% - 17px);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding: 0.65rem;
  }

  &__text {
    height: 17px;
    color: #ffffff;
    background-color: #424242;
    display: flex;
    justify-content: center;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    font-size: 0.7rem;
    padding: 0 10px;
    font-weight: 900;
  }

  &:hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  }
}
</style>