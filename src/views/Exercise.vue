<template>
  <div>
    <h1>exercise view</h1>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Exercise</th>
            <th class="text-left">Reps</th>
            <th class="text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in sets(exerciseSlug)" :key="index">
            <td>{{ item.exercise.name }}</td>
            <td>{{ item.reps }}</td>
            <td>{{ item.createdAt }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { EXERCISE } from "@/store-types/module-names";
import { GET_SETS } from "@/store-types/getters-types";

export default {
  name: "Exercise",
  data() {
    return {
      exerciseSlug: ""
    };
  },
  mounted() {
    this.exerciseSlug = this.$route.params.name;
  },
  computed: {
    ...mapGetters(EXERCISE, {
      sets: GET_SETS
    })
  }
};
</script>

<style lang="scss" scoped>
.Exercise {
}
</style>
