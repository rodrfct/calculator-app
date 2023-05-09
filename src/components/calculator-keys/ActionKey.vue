<script setup>
import {useCalculate} from '../../composables/calculate';
import {useDelete} from '../../composables/delete';
import {useReset} from '../../composables/reset';

defineProps({
    value: {
        type: String,
        required: true
    }
})

</script>


<template>
    <button class="calculator-key action-key">{{ value }}</button>
</template>

<style scoped></style>