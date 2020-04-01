<template>
    <BaseContainer>
        <div class="baseHeatmap">
            <p class="title" :style="{ color: titleColor }">
                {{ title }}
            </p>
            <apexchart type="heatmap" :height="height" :width="width" :options="options" :series="series" />
        </div>
    </BaseContainer>
</template>

<script>
import BaseContainer from '../containers/BaseContainer'

export default {
    name: 'BaseHeatMap',
    props: {
        title: {
            type: String,
            default: () => 'Last 28 days',
        },
        titleColor: {
            type: String,
            default: () => '#ff1744',
        },
        height: {
            type: Number,
            required: true,
        },
        width: {
            type: Number,
            required: true,
        },
        options: {
            type: Object,
            default: () => ({
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                colors: ['#FF1744'],
            }),
        },
        series: {
            type: Array,
            default: () => {
                return [
                    {
                        name: 'W4',
                        data: [1, 2, 3, 4, 5, 6, 7],
                    },
                    {
                        name: 'W3',
                        data: [1, 2, 3, 4, 5, 6, 7],
                    },
                    {
                        name: 'W2',
                        data: [1, 2, 3, 4, 5, 6, 7],
                    },
                    {
                        name: 'W1',
                        data: [1, 2, 3, 4, 5, 6, 7],
                    },
                ]
            },
        },
    },
    components: { BaseContainer },
}
</script>

<style lang="scss" scoped>
.baseHeatmap {
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
