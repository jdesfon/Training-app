<template>
    <div class="header">
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
    },
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    color: #424242;
    border-bottom: 1px solid black;
    text-align: left;
    font-weight: 900;
    line-height: 3rem;
    text-transform: capitalize;
}
</style>
