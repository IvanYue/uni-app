import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 挂载 全局常量
Vue.prototype.serverUrl = "http://120.25.226.11:8080//mall-app/wx";



App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
