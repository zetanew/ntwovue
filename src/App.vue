<script setup>
import { ref } from 'vue'

const message = ref('Hello World!')
</script>

<template>
  <div class="font-poppins  bg-slate-300 p-5 rounded">
    <h1 class="text-3xl bg-yellow-300 text-red-800">{{ message }}</h1>
    <p class="font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p class="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p class="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p class="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</template>

<style scoped>

</style>