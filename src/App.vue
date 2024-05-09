<script setup>
import { ref } from 'vue'

const message = ref('Hello World!')
</script>

<template>
  <div class="font-poppins  bg-slate-300 p-5 rounded">
    <router-view />
  </div>
</template>

<style scoped>

</style>