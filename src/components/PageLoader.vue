<template>
    <v-overlay>
        <div class="loader-container">
            <div class="loader loader-left"></div>
            <div class="loader loader-center"></div>
            <div class="loader loader-right"></div>
        </div>
    </v-overlay>
</template>

<style lang="scss" scoped>
.loader-container {
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    .loader {
        margin: 1rem;
        height: 20px;
        width: 20px;
        border-radius: 20px;
        background-color: #ff1744;
        transform-origin: center;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);

        &-left {
            animation: bounce 0.9s ease-in-out infinite;
        }

        &-center {
            animation: bounce 0.9s ease-in-out infinite;
            animation-delay: 0.3s;
        }

        &-right {
            animation: bounce 0.9s ease-in-out infinite;
            animation-delay: 0.6s;
        }
    }
}
</style>
