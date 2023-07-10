<script setup>
import {useCalculationStore} from '../../stores/calculation';

const store = useCalculationStore()

const props = defineProps({
    value: {
        type: String,
        required: true,

        validator: (value) => {
              return ["DEL", "RESET", "="].includes(value)
        }
    }
})


function action() {}

// Set the (store-)action depending on the value
if (props.value === "DEL") {
    action = store.del
} else if (props.value === "RESET") {
    action = store.$reset
} else if (props.value === "=")  {
    action = store.calculate 
}

</script>

<template>
    <button @click="action" class="calculator-key action-key">{{ value }}</button>
</template>
