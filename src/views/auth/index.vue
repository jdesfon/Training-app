<template>
    <div class="auth">
        <PageLoader v-if="isLoading" />
        <div class="form fade-in">
            <router-view />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { USER } from '../../store-types/module-names'
import { GET_LOADING } from '../../store-types/getters-types'
import PageLoader from '../../components/PageLoader'

export default {
    name: 'Auth',
    components: { PageLoader },
    computed: {
        ...mapGetters(USER, {
            isLoading: GET_LOADING,
        }),
    },
}
</script>

<style lang="scss" scoped>
.auth {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    .form {
        background-image: url('../../assets/svg/login/undraw_healthy_habit_bh5w.svg');
        background-position: bottom;
        background-size: contain;
        flex-grow: 3;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
