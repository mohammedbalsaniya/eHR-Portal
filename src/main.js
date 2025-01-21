
import routes from './Router';
import { createApp } from 'vue'
import App from './App.vue'

const app =  createApp(App)
app.use(routes)
app.mount('#app')
