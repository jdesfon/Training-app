<template>
  <div class="home">
    <Header :title="title" />
    <ExercisesList />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { EXERCISE } from "@/store-types/module-names";
import { GET_EXERCISES } from "@/store-types/getters-types";

import Header from "@/components/Header.vue";
import ExercisesList from "@/components/ExercisesList.vue";

export default {
  name: "Home",
  components: {
    Header,
    ExercisesList
  },
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
  min-height: 100vh;
  background-color: #ffffff;
}
</style>
