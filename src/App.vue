<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import OutputComponent from './components/OutputComponent.vue';
import InputComponent from './components/InputComponent.vue';
</script>

<template>
  <div class="wrapper">
    <HeaderComponent />

    <main>
      <OutputComponent />

      <InputComponent />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.wrapper > * {
  margin: 5% 0;
}

@media screen and (width > 600px) {
  .wrapper {
    min-width: 25%;
    max-width: 50%;
  }
}
</style>