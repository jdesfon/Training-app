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
import Header from "@/components/Header.vue";
import SingleNumber from "@/components/charts/SingleNumber";
import { mapGetters } from "vuex";
import { EXERCISE } from "@/store-types/module-names";
import { GET_SETS } from "@/store-types/getters-types";

export default {
  name: "Exercise",
  components: { Header, SingleNumber },
  data() {
    return {
      exerciseSlug: "",
      numberStats: [
        { name: "Today", value: 45 },
        { name: "Last 7 days", value: 354 },
        { name: "Last 30 days", value: 2340 },
        { name: "All time", value: 6821 }
      ]
    };
  },
  computed: {
    ...mapGetters(EXERCISE, {
      sets: GET_SETS
    })
  },
  mounted() {
    this.exerciseSlug = this.$route.params.name;
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
