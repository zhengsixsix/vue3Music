import { createApp } from 'vue'
import App from './App'
import '@/assets/less/index.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).mount('#app')
