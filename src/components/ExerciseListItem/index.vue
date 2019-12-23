<template>
    <div>
        <div class="theExerciseListItem">
            <ExerciseNameCard @click="handleNameCardClick" :exercise="exercise" />
            <ExerciseStatsButton :exercise-slug="exercise.slug" :exercise-id="exercise.exerciseId" />
        </div>
        <AddSetForm v-if="isAddSetVisible" class="scale-in-top" @onSubmitSet="handleSetSubmit" />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import AddSetForm from '../AddSetForm'
import ExerciseNameCard from './ExerciseNameCard'
import ExerciseStatsButton from './ExerciseStatsButton'
import { EXERCISE } from '../../store-types/module-names'
import { CREATE_SET } from '../../store-types/actions-types'

export default {
    name: 'ExerciseListItem',
    props: {
        exercise: {
            type: Object,
            required: true,
        },
    },
    components: {
        AddSetForm,
        ExerciseNameCard,
        ExerciseStatsButton,
    },
    data: () => ({
        isAddSetVisible: false,
    }),
    methods: {
        ...mapActions(EXERCISE, {
            createSet: CREATE_SET,
        }),
        handleNameCardClick() {
            this.isAddSetVisible = !this.isAddSetVisible
        },
        handleSetSubmit(reps) {
            this.createSet({ exerciseId: this.exercise.exerciseId, reps })
            this.isAddSetVisible = false
        },
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
