import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './index.css'

axios.defaults.baseURL = 'https://gorest.co.in/public/'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common = {'Authorization': `Bearer ${'286dab38c44ed569871e8337b06912ec49cac8a7135f2deefbf999e580edda79'}`} //Token

createApp(App).use(router).mount('#app')
// const app = createApp(App)
// app.use(router)
// app.use(axios)
// app.mount('#app')
