<script setup>
import { ref } from 'vue'

const message = ref('Hello World!')
</script>

<template>
  <div class="bg-slate-500 p-5 rounded">
    <h1 class="text-3xl bg-yellow-300 text-red-800">{{ message }}</h1>
  </div>
</template>

<style scoped>

</style>