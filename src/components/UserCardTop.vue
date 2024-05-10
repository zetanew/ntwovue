<template>
    <div class="user-card">
      <div class="bg-white relative shadow-xl overflow-hidden group rounded-md p-3">
        <div class="flex items-center gap-1">
          <img src="https://i.ibb.co/YyVKHg7/Screenshot-from-2024-05-10-05-22-57.png"
          class="w-20 h-20 object-center object-cover rounded-full"
          />
          <div class="w-fit">
            <h1 class="text-purple-600 text-md font-medium">
              {{ user.name }}
            </h1>
            <a class="text-xs text-purple-400">
              {{ user.email }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  </style>