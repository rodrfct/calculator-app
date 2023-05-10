<script setup>
import { useCalculationStore } from '../../stores/calculation';

const store = useCalculationStore()

defineProps({
    value: {
        type: Number,
        required: true
    }
})


// if (props.buttonType.type == "Number") {
//     content = parseInt(props.buttonType.value)
// } else if (props.buttonType.type == "Operator") {
//     content = props.buttonType.value
// } else if (props.buttonType.type == "Action") {
//     switch (props.buttonType.value) {
//         case "Delete":
//             {content = "DEL"
//             const action = useDelete()
//             break;}
//         case "Reset":
//             {content = "RESET"
//             const action = useReset()
//             break;}
//         case "Calculate":
//             {content = "="
//             const action = useCalculate()
//             break;}
//         default:
//             break;
//     }
// }

</script>

<template>
    <button @click="store.operationString+=`${value}`" class="calculator-key numkey">{{ value }}</button>
</template>

<style scoped></style>