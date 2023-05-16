<script setup>
import { computed } from 'vue';
import { useCalculationStore } from '../stores/calculation';

const store = useCalculationStore()

const toComma = computed(() => {
    return store.output.replace(".", ",")
})
</script>

<template>
    <div class="output">
        <span class="result">
            {{ toComma }}
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