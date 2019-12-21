<template>
    <div class="home">
        <Header :title="title" />
        <ExercisesList />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EXERCISE } from '../store-types/module-names'
import { GET_EXERCISES } from '../store-types/getters-types'
import Header from '../components/Header'
import ExercisesList from '../components/ExercisesList'

export default {
    name: 'Home',
    components: {
        Header,
        ExercisesList,
    },
    data() {
        return {
            title: 'my exercises',
        }
    },
    computed: {
        ...mapGetters(EXERCISE, {
            exercises: GET_EXERCISES,
        }),
    },
}
</script>

<style lang="scss" scoped>
.home {
    background-image: url('../assets/svg/wave(2).svg');
    background-size: contain;
    display: flex;
    justify-content: center;

    @media (max-width: 960px) {
        background-size: cover;
    }
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        width: 342px;
    }
}
</style>
