<template>
  <div class="baseHeatMap">
    <apexchart
      type="heatmap"
      height="350"
      :options="options"
      :series="series"
    />
  </div>
</template>

<script>
function generateData(count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = "Day " + (i + 1).toString();
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({ x, y });
    i++;
  }
  return series;
}

export default {
  name: "BaseHeatMap",
  props: {
    width: {
      type: Number,
      default: () => 500
    },
    options: {
      type: Object,
      default: () => ({
        dataLabels: {
          enabled: false
        },
        colors: ["#008FFB"],

        title: {
          text: "HeatMap Chart (Single color)"
        }
      })
    },
    series: {
      type: Array,
      default: () => {
        return [
          {
            name: "Week 9",
            data: generateData(7, {
              min: 0,
              max: 90
            })
          },
          {
            name: "Week 8",
            data: generateData(7, {
              min: 0,
              max: 90
            })
          },
          {
            name: "Week 7",
            data: generateData(7, {
              min: 0,
              max: 90
            })
          },
          {
            name: "Week 6",
            data: generateData(7, {
              min: 0,
              max: 90
            })
          },
          {
            name: "Week 5",
            data: generateData(7, {
              min: 0,
              max: 90
            })
          },
          {
            name: "Week 4",
            data: generateData(7, {
              min: 0,
              max: 90
            })
          },
          {
            name: "Week 3",
            data: generateData(7, {
              min: 0,
              max: 90
            })
          },
          {
            name: "Week 2",
            data: generateData(7, {
              min: 0,
              max: 90
            })
          },
          {
            name: "Week 1",
            data: generateData(7, {
              min: 0,
              max: 90
            })
          }
        ];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.baseHeatMap {
  background-color: white;
}
</style>
