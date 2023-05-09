<script setup>
import { useCalculationStore } from '../stores/calculation';
import NumberKey from './calculator-keys/NumberKey.vue';
import ActionKey from './calculator-keys/ActionKey.vue';
import OperatorKey from './calculator-keys/OperatorKey.vue';

const store = useCalculationStore()

let btype = {
    type: "Action",
    value: "Reset"
}
</script>

<template>
    <div class="input">
        <!-- This is for drafting, remove after -->
        <button @click="store.pool++">+1</button>
        <button @click="store.pool--">-1</button>
        <button @click="store.pool = store.pool * 2">x2</button>
        <button @click="store.pool = store.pool / 2">/2</button>
        
        <NumberKey :value="0" />
        <NumberKey v-for="(index) in 9" :value="index" />

        <ActionKey :value="'DEL'" id="delete-btn" />

        <OperatorKey :value="'+'" />
        <OperatorKey :value="'-'" />
        <OperatorKey :value="'x'" />
        <OperatorKey :value="'/'" />
        <OperatorKey :value="'.'" />

        <ActionKey :value="'RESET'" id="reset-btn" />
        <ActionKey :value="'='" id="equal-btn" />
        
    </div>
</template>

<style scoped>
.input {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5%;

    padding: 5%;
    border-radius: 10px;
    background-color: var(--toggle-and-keypad-background);
}

.calculator-key {
    padding: 0.3rem 1rem;
    background-color: var(--light-grayish-orange);
    box-shadow: 0 2px var(--grayish-orange);
    border: none;
    border-radius: 5px;
    
    font-size: 32px;
    color: var(--very-dark-grayish-blue)
}

#delete-btn {
    grid-column: 4;
}

#reset-btn{
    grid-column: 1 / 3;
}

#equal-btn{
    grid-column: 3 / 5;
}

</style>