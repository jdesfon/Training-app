<template>
    <div class="history__container">
        <div class="history">
            <Header :title="exerciseSlug" nav :to="exerciseStatsUrl" />
            <template v-for="(set, setIndex) of sets">
                <div class="history__item" :key="`set${setIndex}`">
                    <v-btn small depressed fab @click="handleSetAction(set)">
                        <v-icon small>more_vert</v-icon>
                    </v-btn>

                    <span>{{ set.reps }}</span>
                </div>
            </template>
        </div>
        <EditSetDialog
            v-if="isDialogVisible"
            :set="setToEdit"
            @onUpdateSet="handleUpdateSet"
            @onDeleteSet="handleDeleteSet"
            @onClose="isDialogVisible = false"
        />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { EXERCISE } from '../store-types/module-names'
import { GET_SETS } from '../store-types/getters-types'
import { UPDATE_SET, DELETE_SET } from '../store-types/actions-types'

import Header from '../components/Header'
import EditSetDialog from '../components/history/EditSetDialog'

export default {
    name: 'History',
    components: { Header, EditSetDialog },
    mounted() {
        this.exerciseId = this.$route.params.exerciseId
        this.exerciseSlug = this.$route.params.name
        this.sets = this.getSets(this.exerciseId).items
    },
    data: () => ({
        exerciseId: null,
        exerciseSlug: '',
        isDialogVisible: false,
        sets: [],
        setToEdit: {},
    }),
    computed: {
        ...mapGetters(EXERCISE, {
            getSets: GET_SETS,
        }),
        exerciseStatsUrl() {
            return `/exercise/${this.exerciseSlug}/id/${this.exerciseId}`
        },
    },
    methods: {
        ...mapActions(EXERCISE, {
            updateSet: UPDATE_SET,
            deleteSet: DELETE_SET,
        }),
        handleSetAction(set) {
            this.setToEdit = set
            this.isDialogVisible = true
        },
        handleUpdateSet({ setId, reps }) {
            this.updateSet({ setId, reps }).then(() => {
                const setIndex = this.sets.findIndex(set => set.setId === setId)
                this.sets[setIndex].reps = reps
            })
        },
        handleDeleteSet({ setId }) {
            this.deleteSet({ setId }).then(() => {
                const setIndex = this.sets.findIndex(set => set.setId === setId)
                this.sets.splice(setIndex, 1)
            })
        },
    },
}
</script>

<style lang="scss">
.history__action {
    position: relative;
    background-color: #ffffff;
    padding: 2rem;

    label {
        padding: 2rem;
    }

    .action__buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
}
</style>

<style lang="scss" scoped>
.history__container {
    background-image: url('../assets/svg/wave.svg');
    background-size: contain;
    display: flex;
    justify-content: center;

    @media (max-width: 960px) {
        background-size: cover;
    }

    .history {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 342px;
        margin: 0 auto;

        &__date {
            width: 100%;
            padding: 0.2rem 0.5rem;
            font-size: 0.8rem;
            text-align: left;
            background-color: #ffffff;
            border-radius: 0.5rem;
            margin-bottom: 0.5rem;
        }

        &__item {
            width: 100%;
            padding: 0.2rem 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>
