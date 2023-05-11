<script setup>
import NumberKey from './calculator-keys/NumberKey.vue';
import ActionKey from './calculator-keys/ActionKey.vue';
import OperatorKey from './calculator-keys/OperatorKey.vue';

</script>

<template>
    <div class="input">
        
        <NumberKey v-for="(index) in 9" :value="index" class="number-key" />
        <NumberKey :value="0" class="number-key" />

        <ActionKey :value="'DEL'" id="delete-btn" />

        <OperatorKey :value="'+'" id="plus-btn" />
        <OperatorKey :value="'-'" id="minus-btn" />
        <OperatorKey :value="'x'" id="mult-btn" />
        <OperatorKey :value="'/'" id="division-btn" />
        <OperatorKey :value="'.'" id="point-btn" />

        <ActionKey :value="'RESET'" id="reset-btn" />
        <ActionKey :value="'='" id="equal-btn" />
        
    </div>
</template>

<style scoped>
.input {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    column-gap: 5%;
    row-gap: 8%;

    /*Added more bottom padding to prevent overflow
    a bit of a hack tbh */
    padding: 6% 6% 26% 6%;
    border-radius: 10px;
    background-color: var(--toggle-and-keypad-background);
}

.calculator-key {
    padding: 0.6rem 1.2rem;
    background-color: var(--light-grayish-orange);
    box-shadow: 0 3px var(--grayish-orange);
    border: none;
    border-radius: 8px;
    
    font-size: 32px;
    color: var(--very-dark-grayish-blue)
}

.action-key {
    font-size: 1.2rem;
    background-color: var(--action-key-background);
    box-shadow: 0 3px var(--action-key-shadow);
    color: var(--white);
}


/* Positioning buttons */
#delete-btn {
    grid-column: 4;
    grid-row: 1;
}

#plus-btn {
    grid-column: 4;
    grid-row: 2;
}

#minus-btn {
    grid-column: 4;
    grid-row: 3;
}

#mult-btn {
    grid-column: 4;
    grid-row: 4;
}

#division-btn {
    grid-column: 3;
    grid-row: 4;
}

#point-btn {
    grid-column: 1;
    grid-row: 4;
}

#reset-btn{
    grid-column: 1 / 3;
}

#equal-btn{
    grid-column: 3 / 5;
    background-color: var(--red);
    box-shadow: 0 3px var(--dark-red);
}

</style>