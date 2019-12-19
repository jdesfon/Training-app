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
                    <SingleNumber :key="index" :title="stat.name" :value="stat.value" />
                </template>
            </template>
        </div>

        <div class="baseHeatMap">
            <BaseHeatMap :width="heatMap.width" :height="heatMap.height" :series="heatMap.series" />
        </div>
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
    components: { Header, SingleNumber, BaseHeatMap },
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

    .number-cards {
        margin-top: 0.5rem;

        width: 342px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .baseHeatMap {
        margin-top: 4px;

        border-radius: 0.5rem;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
        width: 334px;
        height: 225px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
