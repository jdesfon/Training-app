<template>
    <BaseContainer>
        <div class="theAddSetForm">
            <input
                    class="theAddSetForm__number-input"
                    type="number"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    v-model="reps"
            />
            <div class="theAddSetForm__input-controls">
                <button class="control-button grey-ripple" @click="increaseReps">
                    <i class="material-icons">add</i>
                </button>
                <button class="control-button grey-ripple" :disabled="reps < 1" @click="decreaseReps">
                    <v-icon large color="#000000">
                        remove
                    </v-icon>
                </button>
            </div>
            <button class="theAddSetForm__submit-button blue-ripple" @click="submitReps">
                <i class="material-icons">check</i>
            </button>
        </div>
    </BaseContainer>
</template>

<script>
import BaseContainer from './containers/BaseContainer'

export default {
    name: 'AddSetForm',
    components: { BaseContainer },
    data: () => ({
        reps: null,
        isValid: false,
    }),
    methods: {
        increaseReps() {
            if (this.reps < 10000) {
                this.reps += 1
            }
        },
        decreaseReps() {
            if (this.reps > 0) {
                this.reps -= 1
            }
        },
        submitReps() {
            this.$emit('onSubmitSet', this.reps)
            this.reps = null
        },
    },
}
</script>

<style lang="scss" scoped>
    .theAddSetForm {
        height: 160px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &__number-input {
            cursor: pointer;
            outline: none;
            border-radius: 0.5rem;
            border: 2px solid #e5e5e5;
            background-color: #c4c4c4;
            height: 100%;
            width: 135px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 50px;
            font-weight: 900;
            color: #000000;
            letter-spacing: -3px;
            text-align: center;
        }

        /*
            Chrome, Safari, Edge, Opera
            Remove spinners
         */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /*
            Firefox
            remove spinners
        */
        input[type='number'] {
            -moz-appearance: textfield;
        }

        &__input-controls {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-content: space-between;
            height: 100%;
            width: 90px;

            .control-button {
                outline: none;
                display: flex;
                justify-content: center;
                align-items: center;
                height: calc(50% - 0.25rem);
                border-radius: 0.5rem;
                border: 2px solid #e5e5e5;
                background-color: #c4c4c4;

                i {
                    font-size: 2rem;
                    color: #000000;
                }

                &:disabled {
                    background-color: #eeeeee;
                }
            }
        }

        &__submit-button {
            outline: none;
            border: none;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
            border-radius: 0.5rem;
            background-color: #2196f3;
            height: 100%;
            width: 80px;
            display: flex;
            align-items: center;
            justify-content: center;

            i {
                font-size: 4rem;
                color: #ffffff;
            }
        }
    }
</style>
