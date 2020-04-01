<template>
    <div class="exercisesList">
        <template v-for="(exercise, index) of exercises">
            <ExerciseListItem :key="index" :exercise="exercise" />
        </template>
    </div>
</template>

<script>
import ExerciseListItem from './ExerciseListItem/index'

export default {
    name: 'ExerciseList',
    components: { ExerciseListItem },
    props: {
        exercises: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.exercisesList {
    width: 100%;

    div {
        margin: 0.8rem 0;
    }
}
</style>
