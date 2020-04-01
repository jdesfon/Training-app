<template>
    <div class="baseContainer">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'BaseContainer',
}
</script>

<style scoped lang="scss">
.baseContainer {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.5rem;
}
</style>
