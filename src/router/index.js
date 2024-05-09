import { createRouter, createWebHistory } from 'vue-router'
import UsersPage from '@/views/UsersPage.vue'
//import TodoPage from '@/views/TodoPage.vue'
//import AlbumsPage from '@/views/AlbumsPage.vue'
//import PostsPage from '@/views/PostsPage.vue'
//import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: UsersPage },
    //{ path: "/todo/:id", component: TodoPage },
    //{ path: "/albums/:id", component: AlbumsPage },
    //{ path: "/posts/:id", component: PostsPage },
    //{ path: "/:notFound(.*)", component: NotFound },
  ]
})

export default router
