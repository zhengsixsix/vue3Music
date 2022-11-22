import { createApp } from 'vue'
import App from './App'
import '@/assets/less/index.less'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style.js'

createApp(App).use(Varlet).mount('#app')
