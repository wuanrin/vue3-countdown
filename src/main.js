import { createApp } from 'vue'
import { setupGlobalComponents } from './plugins/component'
import App from './App.vue'

const app = createApp(App)
app.use(setupGlobalComponents).mount('#app')
