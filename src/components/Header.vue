<template>
    <div class="header">
        <v-btn v-if="nav" fab small depressed :to="to">
            <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <h1>{{ title }}</h1>
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
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    display: flex;
    align-items: center;
    color: #424242;
    border-bottom: 1px solid black;
    text-align: left;
    font-weight: 900;
    line-height: 3rem;
    text-transform: capitalize;
}
</style>
