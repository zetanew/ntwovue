<template>
  <div class="user-card">
    <div class="bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
      <div class="flex items-start gap-4">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY9MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
        class="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
        />
        <div class="w-fit transition-all transform duration-500">
          <h1 class="text-purple-700 font-bold p-2">
            {{ user.name }}
          </h1>
          <p class="text-purple-500 p-1">{{ user.email }}</p>
          <p class="text-purple-400 p-1">{{ user.phone }}</p>
          <div class="flex items-center mt-3">
            <img :src="locationIcon" class="h-6 w-6 mr-2" />
            <p class="text-gray-600">{{user.address.city}}</p>
          </div>
          <div class="flex items-center p-2">
            <img :src="companyIcon" class="h-6 w-6 mr-2" />
            <p class="text-gray-600">{{user.company.name}}</p>
          </div>
          <div class="flex items-center p-2">
            <img :src="websiteIcon" class="h-6 w-6 mr-2" />
            <a class="text-xs text-gray-600">
              {{ user.website }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// icons 
import companyIcon from '@/assets/icons/company.png'
import websiteIcon from '@/assets/icons/website.png'
import locationIcon from '@/assets/icons/location.png'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      companyIcon,
      websiteIcon,
      locationIcon
    }
  }
}
</script>

<style scoped>
</style>