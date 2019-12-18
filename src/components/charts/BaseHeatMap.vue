<template>
  <apexchart
    type="heatmap"
    :height="height"
    :width="width"
    :options="options"
    :series="series"
  />
</template>

<script>
export default {
  name: "BaseHeatMap",
  props: {
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    options: {
      type: Object,
      default: () => ({
        chart: {
          toolbar: {
            show: false
          },
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#FF1744"],
      })
    },
    series: {
      type: Array,
      default: () => {
        return [
          {
            name: "W4",
            data: [1, 2, 3, 4, 5, 6, 7]
          },
          {
            name: "W3",
            data: [1, 2, 3, 4, 5, 6, 7]
          },
          {
            name: "W2",
            data: [1, 2, 3, 4, 5, 6, 7]
          },
          {
            name: "W1",
            data: [1, 2, 3, 4, 5, 6, 7]
          }
        ];
      }
    }
  }
};
</script>