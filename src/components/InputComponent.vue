<script setup>
import { useCalculationStore } from '../stores/calculation';

const store = useCalculationStore()
</script>

<template>
    <div class="input">
        <!-- This is for drafting, remove after -->
        <button @click="store.pool++">+1</button>
        <button @click="store.pool--">-1</button>
        <button @click="store.pool = store.pool * 2">x2</button>
        <button @click="store.pool = store.pool / 2">/2</button>
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

</style>