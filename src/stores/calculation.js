import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCalculationStore = defineStore('calculation', () => {
  const pool = ref(0)
  const doublePool = computed(() => pool.value * 2)
  function increment() {
    pool.value++
  }

  return { pool, doublePool, increment }
})
