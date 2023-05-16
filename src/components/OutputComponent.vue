<script setup>
import { useCalculationStore } from '../stores/calculation';

const store = useCalculationStore()
</script>

<template>
    <div class="output">
        <span class="result">
            {{ store.output }}
        </span>
    </div>
</template>

<style scoped>
.output {
    padding: 8% 5%;
    border-radius: 10px;
    font-size: 3rem;
    background-color: var(--screen-background);

    color: var(--text-color);
    text-align: right;
    overflow-x: auto;
}

</style>