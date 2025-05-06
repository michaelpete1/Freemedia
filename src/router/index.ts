import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import CreatePage from '../views/CreatePage.vue'
import Posts from '../views/Posts.vue'
import PostDetailPage from '../views/PostDetailPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/LoginPage', name: 'LoginPage', component: LoginPage },
  { path: '/SignUpPage', name: 'SignUpPage', component: SignUpPage },
  { path: '/ProfilePage', name: 'ProfilePage', component: ProfilePage },
  { path: '/CreatePage', name: 'CreatePage', component: CreatePage },
  {
    path: '/PostDetailPage/:id?',  // The `?` makes the `id` parameter optional
    name: 'PostDetailPage',
    component: PostDetailPage,  // Component directly imported here
  },
  { path: '/Posts', name: 'Posts', component: Posts },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
