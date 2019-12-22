<template>
    <div class="header">
        <v-btn v-if="nav" fab small depressed :to="to">
            <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>

        <div class="header__title">{{ title }}</div>

        <v-btn @click="handleSubmit" elevation="24" small fab>
            <v-icon>power_settings_new</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            default: () => '/',
        },
        nav: {
            type: Boolean,
            default: () => false,
        },
    },
    methods: {
        handleSubmit() {
            this.$router.push({ name: 'signOut' })
        },
    },
}
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    width: 100%;
    min-height: 10vh;
    margin-bottom: 1rem;
    color: #424242;
    text-align: left;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__title {
        background-color: #ffffff;
        border-radius: 2rem;
        padding: 0.5rem 1rem;
    }
}
</style>
