import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCalculationStore = defineStore('calculation', () => {
  const pool = ref(0)
  
  const operationString = ref("")

  const err = ref("")

  const output = computed(() => {
    if (err.value) {
      return err.value
    } else if (operationString.value) {
      return operationString.value
    } else {
      return pool.value
    }
  })

  function del() {
    console.log("Deleting")
    operationString.value = operationString.value.slice(0, -1)
  }

  function calculate() {
    console.log("Calculating")
    let expr = `${pool.value} ${operationString.value}`
    try {
      pool.value = eval(expr);
      operationString.value = ""
    } catch (error) {
      err.value = "Syntax Err"
    }
  }

  function $reset() {
    console.log("Reseting")
    pool.value = 0;

    operationString.value = ""

    err.value = ""
  }

  return { pool, operationString, output, del, calculate, $reset }
})
