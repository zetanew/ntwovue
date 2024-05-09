<template>
  <div class="user-card">
    <div
      class="bg-gray-100 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
      <div class="flex items-center gap-4">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
        class="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
      />
        <div class="w-fit transition-all transform duration-500">
          <h1 class="text-gray-600 dark:text-gray-200 font-bold">
            Mary Phiri
          </h1>
          <p class="text-gray-400">Senior Developer</p>
          <a
            class="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
            mary@gmail.com
          </a>
        </div>
      </div>
      <div class="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
        <div class="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
          <!-- SVGs here -->
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