<script setup>

defineProps({
    value: {
        type: String,
        required: true
    }
})

</script>

<template>
    <button class="calculator-key op-key">{{ value }}</button>
</template>

<style scoped></style>