<template>
    <div class="exercisesList">
        <ExerciseListItem />
        <AddSetForm />
    </div>
</template>

<script>
import ExerciseListItem from './ExerciseListItem/index'
import AddSetForm from './AddSetForm'

export default {
    name: 'ExerciseList',
    components: { ExerciseListItem, AddSetForm },
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
