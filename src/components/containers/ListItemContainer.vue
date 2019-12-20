<template>
    <div class="listItemContainer">
        <main @click="handleClick">
            <slot name="main"></slot>
        </main>
        <footer @click="handleClick">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'ListItemContainer',
    methods: {
        handleClick() {
            this.$emit('click')
        },
    },
}
</script>

<style lang="scss" scoped>
.listItemContainer {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;

    main {
        height: calc(100% - 17px);
        padding: 0 10px;
        font-size: 2rem;
        font-weight: 900;
        letter-spacing: -1px;
        color: #424242;
        display: flex;
        align-items: center;
    }

    footer {
        color: #ffffff;
        background-color: #424242;
        display: flex;
        justify-content: space-between;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        font-size: 0.7rem;
        font-weight: 900;
        padding: 0 10px;
        height: 17px;
    }

    &:hover {
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    }
}
</style>
