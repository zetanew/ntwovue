import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import UsersComponent from '@/components/Users.vue'
import TodoPage from '@/components/TodoPage.vue'
import AlbumPage from '@/components/AlbumPage.vue'
import PostsPage from '@/components/PostsPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: "/", 
      component: HomePage,
      name: "Home",
      children: [
        { path: "", component: UsersComponent ,name: "Users"},
        { path: "todo/:id", component: TodoPage, name: "Todo"},
        { path: "albums/:id", component: AlbumPage, name: "Albums"},
        { path: "posts/:id", component: PostsPage, name: "Posts"},
      ]
    },
    //{ path: "/users", component: UsersComponent },
    //{ path: "/todo/:id", component: TodoPage },
    //{ path: "/albums/:id", component: AlbumsPage },
    //{ path: "/posts/:id", component: PostsPage },
    //{ path: "/:notFound(.*)", component: NotFound },
  ]
})

export default router
