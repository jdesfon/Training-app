<template>
    <div class="home">
        <div class="home__container">
            <Header :title="title" />
            <ExercisesList :exercises="exercises" />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { EXERCISE } from '../store-types/module-names'
import { FETCH_EXERCISES } from '../store-types/actions-types'
import { GET_EXERCISES } from '../store-types/getters-types'
import Header from '../components/Header'
import ExercisesList from '../components/ExercisesList'

export default {
    name: 'Home',
    components: {
        Header,
        ExercisesList,
    },
    mounted() {
        this.fetchExercises()
    },
    data() {
        return {
            title: 'Home',
        }
    },
    methods: {
        ...mapActions(EXERCISE, {
            fetchExercises: FETCH_EXERCISES,
        }),
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
    background-image: url('../assets/svg/wave.svg');
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
