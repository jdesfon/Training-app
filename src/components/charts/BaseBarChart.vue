<template>
  <div class="baseBarChart">
    <apexchart
      :width="width"
      type="bar"
      :options="options"
      :series="series"
    />
  </div>
</template>

<script>
export default {
  name: "BaseBarChart",
  props: {
    width: {
      type: Number,
      default: () => 500
    },
    options: {
      type: Object,
      default: () => ({
        chart: {
          id: "base-bar-chart",
          toolbar: {
            show: false
          },
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      })
    },
    series: {
      type: Array,
      default: () => {
        return [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.baseBarChart {
  background-color: white;
}
</style>
