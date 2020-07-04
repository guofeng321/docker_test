import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import test from './views/test.vue' // 测试页面
import map_test from './views/map-test.vue' //高德地图测试页面
import book from './views/book' // 书架测试页面
import screenData from './views/screenData' // 屏幕数据
import tabtest from './views/tabtest.vue'  // tab切换
import table from './views/table.vue'  // table
import position from './views/position.vue' // 定位测试
import f2 from './views/f2.vue' // 图表测试
import popup from './views/viewpopup.vue' // 插件测试
import ajax from './views/ajax.vue'
import watchtest from './views/watchtest.vue' // watch 监听测试
import canvastest from './views/canvastest.vue' // 画布动画
import flexgroup from './views/flexGroup.vue' // flexgroup
import authtree from './views/authtree.vue' // authtree

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/authtree',
      name: 'authtree',
      component: authtree,
      // redirect: '/index',
      meta: {
        title: '321'
      },
      
    },
    {
      path: '/flexgroup',
      name: 'flexgroup',
      component: flexgroup,
      // redirect: '/index',
      meta: {
        title: '321'
      },
      
    },
    {
      path: '/canvastest',
      name: 'canvastest',
      component: canvastest,
      // redirect: '/index',
      meta: {
        title: '321'
      },
      
    },
    {
      path: '/watchtest',
      name: 'watchtest',
      component: watchtest,
      // redirect: '/index',
      meta: {
        title: '321'
      },
      
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // redirect: '/index',
      meta: {
        title: '321'
      },
      
    },
    {
      path: '/ajax',
      name: 'ajax',
      component: ajax,
      // redirect: '/index',
      meta: {
        title: '插件测试'
      },
      
    },
    {
      path: '/popup',
      name: 'popup',
      component: popup,
      // redirect: '/index',
      meta: {
        title: '插件测试'
      },
      
    },
    {
      path: '/tabtest',
      name: 'tabtest',
      component: tabtest,
      meta: {
        title: ''
      },
      
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      meta: {
        title: '测试页面'
      } 
    },
    {
      path: '/',
      name: 'map_test',
      component: map_test,
      meta: {
        title: '高德地图测试页面'
      } 
    },
    {
      path: '/book',
      name: 'book',
      component: book,
      meta: {
        title: '书架测试页面'
      } 
    },
    {
      path: '/screenData',
      name: 'screenData',
      component: screenData,
      meta: {
        title: '屏幕数据'
      } 
    },
    {
      path: '/table',
      name: 'table',
      component: table,
      meta: {
        title: '表格'
      } 
    },
    {
      path: '/position',
      name: 'position',
      component: position,
      meta: {
        title: '定位'
      } 
    },
    {
      path: '/f2',
      name: 'f2',
      component: f2,
      meta: {
        title: 'f2'
      } 
    }
  ]
})
