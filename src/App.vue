<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import OutputComponent from './components/OutputComponent.vue';
import InputComponent from './components/InputComponent.vue';
</script>

<template>
  <div class="wrapper">
    <HeaderComponent />

    <OutputComponent />

    <InputComponent />
  </div>
</template>

<style scoped>
.wrapper {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.wrapper > * {
  margin: 5% 0;
}
</style>