<template>
    <ListItemContainer class="exerciseNameCard" @click="handleClick">
        <template #main>
            {{ exerciseName }}
        </template>
        <template #footer>
            <span>last set 10 reps</span>
            <span>Dec 25th, 10:03</span>
        </template>
    </ListItemContainer>
</template>

<script>
import ListItemContainer from '../containers/ListItemContainer'

export default {
    name: 'ExerciseNameCard',
    props: {
        exerciseName: {
            type: String,
            required: true,
        },
    },
    components: { ListItemContainer },
    methods: {
        handleClick() {
            this.$emit('click')
        },
    },
}
</script>

<style lang="scss" scoped>
.exerciseNameCard {
    width: calc(100% - 4.5rem);
    cursor: pointer;
}
</style>
