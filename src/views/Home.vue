<template>
  <div class="home">
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
    <!-- Exercise list -->
    <template v-for="exercise of exercises">
      <TheExerciseListItem
        :key="exercise.uid"
        :exercise="exercise"
      />
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
  data() {
    return {
      title: "my exercises"
    };
  },
  computed: {
    ...mapGetters(EXERCISE, {
      exercises: GET_EXERCISES
    })
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  min-height: 100vh;
  background-color: cadetblue;
}

.header {
  background-color: #1565c0;
  width: 100%;
  color: #fafafa;
  text-align: center;
}
</style>
