<template>
    <div class="auth">
        <div class="form fade-in">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Auth',
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
