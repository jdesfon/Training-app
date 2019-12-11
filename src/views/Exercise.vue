<template>
  <div>
    <h1>{{ exerciseSlug }}</h1>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Reps</th>
            <th class="text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in sets(exerciseSlug)" :key="index">
            <td>{{ item.reps }}</td>
            <td>{{ item.createdAt | date }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import { EXERCISE } from "@/store-types/module-names";
import { GET_SETS } from "@/store-types/getters-types";

export default {
  name: "Exercise",
  filters: {
    date: val => {
      return moment(val).format("MMM Do, H:mm:ss");
    }
  },
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
