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
