// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './index.css'


const app = createApp(App)

app.use(createPinia()) // Use Pinia for state management
app.use(router) // Use Vue Router for routing

app.mount('#app')
