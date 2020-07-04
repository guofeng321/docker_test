import Vue from 'vue'
import App from './App.vue'
import  '../src/assets/css/reset.scss'
import router from './router'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

import '../src/assets/iconfont/iconfont.css'

import VueHtml5Editor from 'vue-html5-editor'
import '../src/assets/css/font-awesome.min.css'

import yuluo from './plug/yuluo'

import './assets/js/util'

Vue.use(yuluo)
Vue.use(mandMobile)
Vue.use(VueHtml5Editor)

import echarts from 'echarts'
Vue.prototype.echarts = echarts; 

// 引入样式
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件
import {VTable,VPagination} from 'vue-easytable'

// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)


//  解决报错 NavigationDuplicated {_name: "NavigationDuplicated", name: "NavigationDuplicated"}
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 


Vue.config.productionTip = false
// Vue.prototype.echarts = echarts; 
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

// // 根据路由设置标题
// router.beforeEach((to, from, next) => {
//   /*路由发生改变修改页面的title */
  
//   if(to.meta.title) {
//     document.title = to.meta.title
//   }
//   next();
// })