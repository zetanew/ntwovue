import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import UsersPage from '@/components/Users.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: "/", 
      component: HomePage,
      children: [
        { path: "", component: UsersPage },
      ]
    },
    //{ path: "/users", component: UsersPage },
    //{ path: "/todo/:id", component: TodoPage },
    //{ path: "/albums/:id", component: AlbumsPage },
    //{ path: "/posts/:id", component: PostsPage },
    //{ path: "/:notFound(.*)", component: NotFound },
  ]
})

export default router
