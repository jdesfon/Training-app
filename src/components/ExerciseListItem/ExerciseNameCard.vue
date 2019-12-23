<template>
    <ListItemContainer class="exerciseNameCard" @click="handleClick">
        <template #main>
            {{ exercise.name }}
        </template>
        <template #footer v-if="lastSet">
            <span>last set {{ lastSet.reps }} reps</span>
            <span>{{ lastSet.createdAt | unixToDate }}</span>
        </template>
    </ListItemContainer>
</template>

<script>
import { mapGetters } from 'vuex'
import { EXERCISE } from '../../store-types/module-names'
import { GET_LAST_SET } from '../../store-types/getters-types'
import ListItemContainer from '../containers/ListItemContainer'

export default {
    name: 'ExerciseNameCard',
    props: {
        exercise: {
            type: Object,
            required: true,
        },
    },
    components: { ListItemContainer },
    computed: {
        ...mapGetters(EXERCISE, {
            getLastSet: GET_LAST_SET,
        }),
        lastSet() {
            const set = this.getLastSet(this.exercise.exerciseId)
            return set
        },
    },
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
