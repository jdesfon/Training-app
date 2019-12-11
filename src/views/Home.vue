<template>
  <div class="home">
    <!-- Exercise list -->
    <template v-for="exercise of exercises">
      <TheExerciseListItem :key="exercise.uid" :exercise="exercise" />
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { EXERCISE } from "@/store-types/module-names";
import { GET_EXERCISES } from "@/store-types/getters-types";

import TheExerciseListItem from "@/components/TheExerciseListItem";

export default {
  name: "Home",
  components: { TheExerciseListItem },
  computed: {
    ...mapGetters(EXERCISE, {
      exercises: GET_EXERCISES
    })
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 1rem;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
