<template>
  <div id="app" class="iconfont">
   
    <router-view/>
  </div>
</template>

<script>
export default {
  // watch: {
  //   $route( to , from ){   
  //      console.log( to , from )
  //       if(to.meta.title) {
  //         document.title = to.meta.title
  //       }
  //   }
  // },
}

import router from './router'

// 根据路由设置标题
router.beforeEach((to, from, next) => {
  /*路由发生改变修改页面的title */
  
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next();
})

</script>

<style lang="scss">
html{
  background-color: #eee;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  height: 100%;
}
#nav { 
  padding: 30px;
  a {
    font-weight: bold;
    // color: #2c3e50;
    // &.router-link-exact-active {
      // color: #42b983;
    // }
  }
}

//针对UI插件写的样式
.md-input-item,.md-textarea-item{
    background-color: #fff;
    margin-top: 5px;
    padding: 0 15px;
    box-sizing: border-box;
}
</style>
