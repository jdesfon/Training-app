<template>
    <ListItemContainer class="exerciseStatsButton">
        <template #main>
            <div class="main">
                <i class="material-icons">trending_up</i>
            </div>
        </template>
        <template #footer>
            <span class="footer">stats</span>
        </template>
    </ListItemContainer>
</template>

<script>
import ListItemContainer from '../containers/ListItemContainer'

export default {
    name: 'ExercisesStatsButton',
    components: { ListItemContainer },
}
</script>

<style lang="scss" scoped>
.exerciseStatsButton {
    width: 4.25rem;

    .main {
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
        i {
            font-size: 2.2rem;
            color: #ff1744;
            font-weight: 900;
        }
    }

    .footer {
        text-align: center;
        width: 100%;
    }
}
</style>
