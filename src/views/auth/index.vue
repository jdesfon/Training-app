<template>
    <div class="login">
        <v-progress-circular v-if="isLoading" indeterminate :size="72" :width="12" />
        <router-view />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { USER } from '../../store-types/module-names'
import { GET_LOADING } from '../../store-types/getters-types'

export default {
    name: 'Auth',
    computed: {
        ...mapGetters(USER, {
            isLoading: GET_LOADING,
        }),
    },
}
</script>

<style lang="scss" scoped>
.login {
    background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
        linear-gradient(to top, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.25) 200%);
    background-blend-mode: multiply;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
