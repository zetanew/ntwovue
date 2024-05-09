<script setup>
import { ref } from 'vue'

const message = ref('Hello World!')
</script>

<template>
  <div class="p-5 rounded">
    <h1 class="text-3xl text-yellow-300">{{ message }}</h1>
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
}
</style>