<script setup>

const props = defineProps({
    value: {
        type: String,
        required: true,

        validator: (value) => {
              return ["DEL", "RESET", "="].includes(value)
        }
    },
    action: {
        type: Function,
        required: true
    }
})

</script>

<template>
    <button @click="action" class="calculator-key action-key">{{ value }}</button>
</template>
