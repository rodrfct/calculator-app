import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCalculationStore = defineStore('calculation', () => {
  // Result of previous operations, some kind of memory
  const pool = ref(0)
  
  // String made of user inputs, will be used as a expression
  const operationString = ref("")

  // Error to display on screen when needed
  const err = ref("")

  // The output we will be showing on screen
  const output = computed(() => {
    if (err.value) {
      return err.value
    } else if (operationString.value) {
      return operationString.value.replace(".", ",")
    } else {
      return pool.value.toString().replace(".", ",")
    }
  })

  // Simply deletes the las char of the input
  function del() {
    operationString.value = operationString.value.slice(0, -1)
  }

  // Calculates the result of the expression
  function calculate() {
    let expr
    if (pool.value) {
      // If the previous result is not 0, use the user's selected operator
      expr = `${pool.value} ${operationString.value.replace("x", "*")}`
    } else {
      // Otherwise sum user's input to the existing 0
      expr = `${pool.value} + ${operationString.value.replace("x", "*")}`
    }
    // Evaluate the expresion and save the result to memory
    try {
      pool.value = eval(expr);
      operationString.value = ""
    } catch (error) {
      // If an error happens, display it on screen
      err.value = "Syntax Err"
    }
  }

  // Reset everything
  function $reset() {
    pool.value = 0;

    operationString.value = ""

    err.value = ""
  }

  return { pool, operationString, output, del, calculate, $reset }
})
