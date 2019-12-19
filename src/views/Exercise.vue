<template>
    <div class="exercise">
        <Header :title="exerciseSlug" />
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
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EXERCISE } from '../store-types/module-names'
import { GET_SETS } from '../store-types/getters-types'
import BaseHeatMap from '../components/charts/BaseHeatMap'
import Header from '../components/Header'
import SingleNumber from '../components/charts/SingleNumber'

import {
    getTotalReps,
    getTotalFromDays,
    getLastNDayInArray,
    getTotalPerDay,
    groupSetsPerWeek,
} from '../helpers/setsHelper'

export default {
    name: 'Exercise',
    components: {
        BaseHeatMap,
        Header,
        SingleNumber,
    },
    mounted() {
        this.exerciseSlug = this.$route.params.name
        const today = getTotalFromDays(this.sets, 0)
        const lastWeek = getTotalFromDays(this.sets, 6)
        const lastMonth = getTotalFromDays(this.sets, 29)
        const total = getTotalReps(this.sets)

        const daysArr = getLastNDayInArray(28)
        const totalPerDay = getTotalPerDay(daysArr, this.sets)
        const groupByWeek = groupSetsPerWeek(totalPerDay)
        this.heatMap.series = groupByWeek
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

        this.today = today
        this.lastWeek = lastWeek
        this.lastMonth = lastMonth
        this.total = total
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
        }
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

    .baseHeatMap {
        width: 100%;
        margin: 0.25rem 0;
    }
}
</style>
