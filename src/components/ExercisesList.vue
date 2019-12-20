<template>
    <div class="exercisesList">
        <ExerciseListItem @click="showAddSet" />
        <AddSetForm v-show="isAddSetVisible" />
    </div>
</template>

<script>
import ExerciseListItem from './ExerciseListItem/index'
import AddSetForm from './AddSetForm'

export default {
    name: 'ExerciseList',
    components: { ExerciseListItem, AddSetForm },
    data: () => ({
        isAddSetVisible: false,
    }),
    methods: {
        showAddSet() {
            this.isAddSetVisible = !this.isAddSetVisible
        },
    },
}
</script>

<style lang="scss" scoped>
.exercisesList {
    width: 100%;

    div {
        margin: 0.25rem 0;
    }
}
</style>
