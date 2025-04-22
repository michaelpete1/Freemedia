import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import CreatePage from '../views/CreatePage.vue'
import PostDetailPage from '../views/PostDetailPage.vue'
import Posts from '../views/Posts.vue'
import { Component } from 'lucide-react'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/LoginPage', name: 'LoginPage', component: LoginPage },
  { path: '/SignupPage', name: 'SignupPage', component: SignupPage },
  { path: '/ProfilePage', name: 'ProfilePage', component: ProfilePage },
  { path: '/CreatePage', name: 'CreatPage', component: CreatePage },
  { path: '/PostDetailPage', name: 'PostDetailPage', component: PostDetailPage },
  { path: '/Posts', name: 'Posts', component: Posts }
  
  // Corrected here
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
