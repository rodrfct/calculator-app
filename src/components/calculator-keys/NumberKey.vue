<script setup>
import { useCalculationStore } from '../../stores/calculation';

const store = useCalculationStore()

defineProps({
    value: {
        type: Number,
        required: true
    }
})

</script>

<template>
    <button @click="store.operationString+=`${value}`" class="calculator-key numkey">{{ value }}</button>
</template>