<template>
    <div class="theExerciseListItem">
        <ExerciseNameCard :exercise="exercise"/>
    </div>
</template>

<script>
import ExerciseNameCard from './ExerciseNameCard'

export default {
    name: 'ExerciseListItem',
    props: {
        exercise: {
            type: Object,
            required: true,
        },
    },
    components: {
        ExerciseNameCard,
    },
}
</script>

<style lang="scss" scoped>
    .theExerciseListItem {
        height: 74px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }
</style>
