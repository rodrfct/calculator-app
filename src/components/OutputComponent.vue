<script setup>
import { useCalculationStore } from '../stores/calculation';

const store = useCalculationStore()
</script>

<template>
    <div class="output">
        <span class="result">
            {{ store.pool }}
        </span>
    </div>
</template>

<style scoped>
.output {
    padding: 5%;
    border-radius: 10px;
    font-size: 3rem;
    background-color: var(--screen-background);
    color: var(--white);
    text-align: right;
}

</style>