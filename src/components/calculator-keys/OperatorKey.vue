<script setup>
import { useCalculationStore } from '../../stores/calculation';

const store = useCalculationStore()

defineProps({
    value: {
        type: String,
        required: true
    }
})

</script>

<template>
    <button @click="store.operationString+=value" class="calculator-key op-key">{{ value }}</button>
</template>