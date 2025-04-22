// src/main.ts
import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './index.css'

const app = createApp(App)

app.config.globalProperties.$axios = axios // now you can use it like this.$axios in components

app.use(createPinia())
app.use(router)
app.mount('#app')
