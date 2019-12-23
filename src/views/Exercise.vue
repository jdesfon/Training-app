<template>
    <div class="exercise__container">
        <div class="exercise">
            <PageLoader v-if="isLoading" />
            <Header :title="exerciseSlug" nav :to="'/exercises'" />
            <div class="exercise-history">
                <v-btn small depressed @click="handleHistoryClick">
                    <v-icon>list</v-icon>
                </v-btn>
            </div>
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
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { EXERCISE } from '../store-types/module-names'
import { LIST_SETS } from '../store-types/actions-types'
import { GET_SETS } from '../store-types/getters-types'
import BaseHeatMap from '../components/charts/BaseHeatMap'
import BaseBarChart from '../components/charts/BaseBarChart'
import Header from '../components/Header'
import PageLoader from '../components/PageLoader'
import SingleNumber from '../components/charts/SingleNumber'

export default {
    name: 'Exercise',
    components: {
        BaseHeatMap,
        BaseBarChart,
        Header,
        PageLoader,
        SingleNumber,
    },
    mounted() {
        this.exerciseId = this.$route.params.exerciseId
        this.exerciseSlug = this.$route.params.name
        this.isLoading = true
        this.fetchSets({ exerciseId: this.exerciseId }).then(() => {
            const sets = this.sets(this.exerciseId)
            const { today, lastWeek, lastMonth, total, heatMapSeries, barChartSeries } = sets.stats
            this.today = today
            this.lastWeek = lastWeek
            this.lastMonth = lastMonth
            this.total = total
            this.heatMap.series = heatMapSeries
            this.barChart.series = barChartSeries
            this.isLoading = false
        })
    },
    data() {
        return {
            isLoading: false,
            exerciseId: null,
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
        ...mapActions(EXERCISE, {
            fetchSets: LIST_SETS,
        }),
        handleHistoryClick() {
            this.$router.push({
                name: 'history',
                params: {
                    name: this.exerciseSlug,
                    exerciseId: this.exerciseId,
                },
            })
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
.exercise__container {
    background-image: url('../assets/svg/wave.svg');
    background-size: contain;
    display: flex;
    justify-content: center;

    @media (max-width: 960px) {
        background-size: cover;
    }

    .exercise {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 342px;
        margin: 0 auto;

        .exercise-history {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
        }

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
}
</style>
