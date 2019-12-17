<template>
  <div class="exercise">
    <Header :title="exerciseSlug" />
    <div class="number-cards">
      <template v-for="(stat, index) of numberStats">
        <template v-if="index === 3">
          <SingleNumber
            :key="index"
            :title="stat.name"
            :value="stat.value"
            :background-color="'#ff1744'"
            :title-color="'#ffffff'"
            :number-color="'#ffffff'"
          />
        </template>
        <template v-else>
          <SingleNumber
            :key="index"
            :title="stat.name"
            :value="stat.value"
          />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { EXERCISE } from "@/store-types/module-names";
import { GET_SETS } from "@/store-types/getters-types";
import Header from "@/components/Header.vue";
import SingleNumber from "@/components/charts/SingleNumber";

import { getTotalReps, getTotalFromDays } from "@/helpers/setsHelper";

export default {
  name: "Exercise",
  components: { Header, SingleNumber },
  mounted() {
    this.exerciseSlug = this.$route.params.name;
    const today = getTotalFromDays(this.sets, 0);
    const lastWeek = getTotalFromDays(this.sets, 7);
    const lastMonth = getTotalFromDays(this.sets, 30);
    const total = getTotalReps(this.sets);

    this.today = today;
    this.lastWeek = lastWeek;
    this.lastMonth = lastMonth;
    this.total = total;
  },
  data() {
    return {
      exerciseSlug: "",
      today: 0,
      lastWeek: 0,
      lastMonth: 0,
      total: 0
    };
  },
  computed: {
    ...mapGetters(EXERCISE, {
      sets: GET_SETS
    }),
    numberStats() {
      return [
        { name: "Today", value: this.today },
        { name: "Last 7 days", value: this.lastWeek },
        { name: "Last 30 days", value: this.lastMonth },
        { name: "All time", value: this.total }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.exercise {
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .number-cards {
    margin-top: 0.5rem;

    width: 342px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
