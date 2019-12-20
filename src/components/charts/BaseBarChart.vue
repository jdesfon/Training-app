<template>
    <BaseContainer>
        <div class="baseBarChart">
            <p class="title" :style="{ color: titleColor }">
                {{ title }}
            </p>
            <apexchart :height="height" :width="width" type="bar" :options="options" :series="series" />
        </div>
    </BaseContainer>
</template>

<script>
import BaseContainer from '../containers/BaseContainer'

export default {
    name: 'BaseBarChart',
    props: {
        title: {
            type: String,
            default: () => 'Last 10 weeks',
        },
        titleColor: {
            type: String,
            default: () => '#ff1744',
        },
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
        options: {
            type: Object,
            default: () => ({
                chart: {
                    id: 'base-bar-chart',
                    toolbar: {
                        show: false,
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '50%',
                        endingShape: 'rounded',
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                colors: ['#FF1744'],
                xaxis: {
                    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                },
            }),
        },
        series: {
            type: Array,
            default: () => {
                return [
                    {
                        name: 'series-1',
                        data: [30, 40, 45, 50, 49, 60, 70, 91],
                    },
                ]
            },
        },
    },
    components: { BaseContainer },
}
</script>

<style lang="scss" scoped>
.baseBarChart {
    margin: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
        width: 100%;
        text-align: left;
        font-weight: 600;
        padding-top: 1rem;
        padding-left: 1.2rem;
    }
}
</style>
