import { createRouter, createWebHistory } from 'vue-router'
//

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: UsersPage },
    { path: "/todo/:id", component: TodoPage },
    { path: "/albums/:id", component: AlbumsPage },
    { path: "/posts/:id", component: PostsPage },
    { path: "/:notFound(.*)", component: NotFound },
  ]
})

export default router
