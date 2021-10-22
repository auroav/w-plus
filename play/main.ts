import { createApp } from "vue"
import App from './app.vue'
import { WIcon } from '@w-plus/components/icon'
import '@w-plus/theme-chalk/src/index.scss'

const app = createApp(App);

app.use(WIcon)
app.mount('#app')