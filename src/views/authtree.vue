<template>
<div>
    <div class="tree_r layui-form">
                <div id="test12" class="demo-tree-more"></div>
                <!-- <Tree :data="data" show-checkbox :check-strictly="strictly"></Tree> -->
            </div>
            <button @click="get"> 获取当前已选节点</button>
</div>
</template>

<script>

import layui from 'layui'
export default {
 components: {
       
 },
 props: {
 },
 data() {
   return {
       
   }
 },
 watch: {
       
 },
 computed: { 
       
 },
 methods: { 
       get(){
           let checked = this.tree.getChecked("#test12");
            console.log(checked);
       }
 },
 created() {
       layui.config({
    base: require('@/assets/js/layui_exts/authtree.js'),
  }).extend({
    authtree: 'authtree',
  });
  let _this = this;
  layui.use(["table", "laydate", "tree", "authtree"], function () {
    let authtree = layui.authtree;
			authtree.render("#test12", [{
				"name": "系统管理",
				"id": 25,
				"value": 25,
				"checked": true
			}, {
				"name": "菜单管理",
				"id": 26,
				"value": 26,
				"checked": true
			}, {
				"name": "企业管理",
				"id": 27,
				"value": 27,
				"checked": true
			}, {
				"name": "角色管理",
				"id": 28,
				"value": 28,
				"checked": false
			}, {
				"name": "权限管理",
				"id": 29,
				"value": 29,
				"checked": false
			}, {
				"name": "账号管理",
				"id": 30,
				"value": 30,
				"checked": false
			}, {
				"name": "日志管理",
				"id": 31,
				"value": 31,
				"checked": false
			}], {
				// id: "demoId1",
				inputname: 'authids[]',
				layfilter: 'lay-check-auth',
				autowidth: true
            });
             _this.tree = authtree;
  })
},
 mounted() {
       
}
}
</script>

<style lang='less' scoped>

</style>
