<template>
    <BaseContainer class="editSetDialog">
        <v-btn small absolute top right icon @click="closeDialog">
            <v-icon>close</v-icon>
        </v-btn>
        <form>
            <label class="editSetDialog__label" for="reps">number of reps</label>
            <input class="editSetDialog__input" type="number" name="reps" id="reps" min="1" v-model="repsNumber" />
            <div class="editSetDialog__buttons">
                <v-btn rounded small dark @click="handleUpdateSet">save</v-btn>
                <v-btn rounded small outlined color="#ff1744" @click="handleDeleteSet">delete set</v-btn>
            </div>
        </form>
    </BaseContainer>
</template>

<script>
import BaseContainer from '../containers/BaseContainer'

export default {
    name: 'EditSetDialog',
    components: { BaseContainer },
    props: {
        set: {
            type: Object,
        },
    },
    mounted() {
        this.repsNumber = this.set.reps
    },
    data: () => ({
        repsNumber: 1,
    }),
    computed: {
        isRepsNumberValid() {
            return typeof this.repsNumber === 'number' && this.repsNumber > 0
        },
    },
    methods: {
        handleUpdateSet() {
            if (this.repsNumber > 0) {
                this.$emit('onUpdateSet', { setId: this.set.setId, reps: this.repsNumber })
                this.closeDialog()
            }
        },
        handleDeleteSet() {
            this.$emit('onDeleteSet', { setId: this.set.setId })
            this.closeDialog()
        },
        closeDialog() {
            this.$emit('onClose')
        },
    },
}
</script>

<style lang="scss" scoped>
.editSetDialog {
    z-index: 2;
    position: absolute;
    bottom: 0;
    background-color: #ffffff;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
    }

    &__label {
        font-size: 0.8rem;
        width: 100%;
        text-align: left;
        padding: 0 1.5rem;
    }

    &__input {
        margin: 0.5rem;
        border: 1px solid #424242;
        border-radius: 1rem;
        padding: 0.8rem 1.5rem;
    }

    &__buttons {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
    }
}
</style>
