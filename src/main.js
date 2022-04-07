import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'normalize.css/normalize.css'
import 'assets/css/common.less'
const app =  createApp(App)
app.use(store)
.use(router)
.use(ElementPlus,{locale: zhCn})
.mount('#app')
