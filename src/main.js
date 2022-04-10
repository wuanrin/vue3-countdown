import { createApp } from 'vue'
import { setupGlobalComponents } from './plugins/component'
import App from './App.vue'

import '@/styles/style.less'

const app = createApp(App)
app.use(setupGlobalComponents).mount('#app')
