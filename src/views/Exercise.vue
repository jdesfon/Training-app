<template>
    <div class="exercise">
        <Header :title="exerciseSlug" nav :to="'/exercises'" />
        <div class="singleNumber-container">
            <template v-for="(stat, index) of numberStats">
                <template v-if="index === 3">
                    <SingleNumber
                        class="singleNumber"
                        :key="index"
                        :title="stat.name"
                        :value="stat.value"
                        :background-color="'#ff1744'"
                        :title-color="'#ffffff'"
                        :number-color="'#ffffff'"
                    />
                </template>
                <template v-else>
                    <SingleNumber class="singleNumber" :key="index" :title="stat.name" :value="stat.value" />
                </template>
            </template>
        </div>

        <BaseHeatMap class="baseHeatMap" :width="heatMap.width" :height="heatMap.height" :series="heatMap.series" />
        <BaseBarChart
            class="baseBarChart"
            :width="barChart.width"
            :height="barChart.height"
            :series="barChart.series"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EXERCISE } from '../store-types/module-names'
import { GET_SETS } from '../store-types/getters-types'
import BaseHeatMap from '../components/charts/BaseHeatMap'
import BaseBarChart from '../components/charts/BaseBarChart'
import Header from '../components/Header'
import SingleNumber from '../components/charts/SingleNumber'

import {
    getLastNDayInArray,
    getTotalFromDays,
    getTotalPerDay,
    getTotalReps,
    groupSetsPerWeek,
} from '../helpers/setsHelper'

export default {
    name: 'Exercise',
    components: {
        BaseHeatMap,
        BaseBarChart,
        Header,
        SingleNumber,
    },
    mounted() {
        this.exerciseSlug = this.$route.params.name
        this.heatMap.series = this.generateHeapMapSeries()
        this.barChart.series = this.generateBarChartSeries()
        this.today = getTotalFromDays(this.sets, 0)
        this.lastWeek = getTotalFromDays(this.sets, 6)
        this.lastMonth = getTotalFromDays(this.sets, 29)
        this.total = getTotalReps(this.sets)
    },
    data() {
        return {
            exerciseSlug: '',
            today: 0,
            lastWeek: 0,
            lastMonth: 0,
            total: 0,
            heatMap: {
                height: 224,
                width: 342,
                series: [],
            },
            barChart: {
                height: 224,
                width: 342,
                series: [],
            },
        }
    },
    methods: {
        generateHeapMapSeries() {
            const daysArr = getLastNDayInArray(28)
            const totalPerDay = getTotalPerDay(daysArr, this.sets)
            const groupByWeek = groupSetsPerWeek(totalPerDay)
            return groupByWeek
                .map((group, index) => {
                    return {
                        name: `w${index}`,
                        data: group.map((day, dayIndex) => {
                            return {
                                x: `d${dayIndex + 1}`,
                                y: Object.values(day)[0],
                            }
                        }),
                    }
                })
                .reverse()
        },
        generateBarChartSeries() {
            const daysArr = getLastNDayInArray(70)
            const totalPerDay = getTotalPerDay(daysArr, this.sets)
            const groupByWeek = groupSetsPerWeek(totalPerDay)
            const data = groupByWeek
                .map(group => {
                    return group.reduce((acc, curr) => {
                        return acc + Object.values(curr)[0]
                    }, 0)
                })
                .reverse()

            return [
                {
                    name: 'last 10 weeks',
                    data,
                },
            ]
        },
    },
    computed: {
        ...mapGetters(EXERCISE, {
            sets: GET_SETS,
        }),
        numberStats() {
            return [
                { name: 'Today', value: this.today },
                { name: 'Last 7 days', value: this.lastWeek },
                { name: 'Last 30 days', value: this.lastMonth },
                { name: 'All time', value: this.total },
            ]
        },
    },
}
</script>

<style lang="scss" scoped>
.exercise {
    background-color: #ffffff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 342px;
    margin: 0 auto;

    .singleNumber-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .singleNumber {
            width: calc(50% - 0.25rem);
            margin: 0.25rem 0;
        }
    }

    .baseHeatMap,
    .baseBarChart {
        width: 100%;
        margin: 0.25rem 0;
    }
}
</style>
