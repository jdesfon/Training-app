<template>
    <div class="landing">
        <div class="title slide-in-left">{{ appTitle }}</div>
        <div class="auth-container fade-in">
            <v-btn class="auth__button" to="/sign-in" raised rounded large block>sign in</v-btn>
            <v-btn class="auth__button" to="/sign-up" color="#ff1744" dark raised rounded large block>sign up</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Landing',
    data: () => ({
        appTitle: 'Training app',
    }),
}
</script>

<style lang="scss" scoped>
.landing {
    height: 100vh;
    width: 100%;
    background-image: url('../assets/svg/landing/undraw_track_and_field_33qn.svg');
    background-size: contain;
    background-position: 0% 40%;
    .title {
        position: absolute;
        color: #212121;
        top: 3rem;
        left: 2rem;
        font-size: 2rem;
        font-weight: 900;
    }

    .auth-container {
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;

        .auth__button {
            margin: 0.5rem;
            font-weight: 600;
        }
    }
}
</style>
