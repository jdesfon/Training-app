<template>
    <ListItemContainer class="exerciseNameCard" @click="handleClick">
        <template #main>
            {{ exercise.name }}
        </template>
        <template #footer v-if="lastSet">
            <span>last set {{ lastSet.reps }} reps</span>
            <span>{{ lastSet.createdAt | unixToDateTime }}</span>
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
    components: { ListItemContainer },
    props: {
        exercise: {
            type: Object,
            required: true,
        },
    },
    computed: {
        ...mapGetters(EXERCISE, {
            getLastSet: GET_LAST_SET,
        }),
        lastSet() {
            const set = this.getLastSet(this.exercise.exerciseId)
            if (set) {
                return set
            }
            return null
        },
    },
    methods: {
        handleClick() {
            this.$router.push({
                name: 'exercise',
                params: {
                    name: this.exercise.slug,
                    exerciseId: this.exercise.exerciseId,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.exerciseNameCard {
    width: 100%;
    cursor: pointer;
}
</style>
