import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* main.js */
import axios from 'axios'
import VueAxios from 'vue-axios'
//import apiConfig from '../config/api.config'
//import index from "../config/index"

//axios.defaults.baseURL = apiConfig.baseUrl;
//axios.defaults.baseURL=index.dev.proxyTable['/api'].target
axios.defaults.baseURL='http://47.101.69.44:5000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
//axios.defaults.headers.post['Content-Type'] ='application/json';
Vue.use(VueAxios,axios)


Vue.config.productionTip = false
axios.defaults.withCredentials=false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// 引入查看大图插件
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Viewer)
Viewer.setDefaults({
  Options: { // Options必须，否则会出现默认打开等等不可预知的错误
   'inline': true, 
   'button': true, // 显示右上角关闭按钮
   'navbar': false, // 缩略图导航
   'title': true, // 是否显示当前图片的标题
   'toolbar': false, // 显示工具栏
   'tooltip': true, // 显示缩放百分比
   'movable': false, // 图片是否可移动
   'zoomable': false, // 是否可缩放
   'rotatable': false, // 是否可旋转
   'scalable': false, // 是否可翻转
   'transition': true, // 是否使用 CSS3 过度
   'fullscreen': true, // 播放时是否全屏
   'keyboard': true, // 是否支持键盘
   'url': 'data-source' // 设置大图片的 url
  }
})

