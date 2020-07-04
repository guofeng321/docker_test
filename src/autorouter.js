//@呼呼扯 2019/4/3
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login.vue'
import home,{titleText} from '@/components/home.vue';
console.log('欢迎访问',titleText);
const requireComponent = require.context('@/components/air', true, /\.vue$/);
 
var routes = [
    {
      path:'/',
      redirect:{name:'home'}
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
        path: '/home', 
        name: 'home', 
        meta:{'linkName': titleText},
        component:home,
        children:[] //children 对应 require.context('@/components/{xxx}')
}];
const homeIndex = routes.length -1;//home位置 下方有用
//路由自动化注册
const route_base = requireComponent.keys().map(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName.replace(/^\.\//,'').replace(/\.vue$/,'');// 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
    const componentNameRe = componentName.replace(/\//g,'-');
    const component = Vue.component(componentNameRe,componentConfig.default || componentConfig);
    const result = {
        path: '/'+componentName, //control/calibration/advanced
        name: componentNameRe, // control-calibration-advanced
        meta:{'linkName':componentConfig.titleText},
        component,
        children:[]
    }
   const arr = componentNameRe.split('-');
   if(arr.length>1){
      equivalArray(arr,result);// arr = ["control", "calibration", "advanced"] , result = path/name/meta/component
   }else{
      routes[homeIndex].children.push(result);//无父级路由子项由此进入
   }
    return result
});
 
function equivalArray(arr,result){
    arr.pop();
    var pname = arr.join("-")
    recursiveTraverse(routes[homeIndex],(node)=>{
      if(node.name == pname){//父级匹配
        node.children.push(result);
      }
    })
}
//利用递归与引用值特性
 function recursiveTraverse(node, action) {
  if (!node || !node.children) { return; }
    action(node);
    node.children.forEach(function(item, index) {
      recursiveTraverse(item, action);
    });
}
Vue.use(Router);
export default new Router({
  // mode: 'history',
  mode: 'hash',
  routes:routes 
})
 console.log(routes,'of');复制代码