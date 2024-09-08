import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import axios from "axios"
import "./axios"
import "@/assets/css/global.css"
const app = createApp(App)

app.use(store).use(router).use(ElementPlus, {
    locale: zhCn,
    size:'small'
  }).mount('#app')
app.config.globalProperties.$axios = axios

