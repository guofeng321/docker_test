<template>
<div>
    <div class="button" @click="down('msg')">消息</div>
    <div class="button" @click="down('confirm')">确认</div>
    <div class="button" @click="model()">初始化表单弹出框</div>
    <div class="button" @click="modelopenadd()">打开表单添加弹出框</div>
    <div class="button" @click="modelopenedit()">打开表单修改弹出框</div>
    <div class="button" @click="modeldata()">获取表单弹出框数据</div>
</div>
</template>

<script>
export default {
 components: {
       
 },
 props: {
 },
 data() {
   return {
       modelList: [
                {
                    text: "姓&#12288;&#12288;名",
                    type: "input",
                    key: "name"
                },
                {
                    text: "&#12288;经纬度",
                    type: "inputs",
                    option: [
                        {
                            text: "经度",
                            key: "let",
                        },
                        {
                            text: "维度",
                            key: "lng",
                        },
                    ]
                },
                {
                    text: "密码",
                    type: "password",
                    key: "pass",
                },
                {
                    text: "下拉选框",
                    type: "select",
                    option:[
                        {
                            key: 1,
                            value: 1,
                        },
                        {
                            key: 2,
                            value: 2,
                        }
                    ],
                    optionKey: 'key',
                    optionValue: 'value',
                    key: 'downward'
                },
                {
                    text: '多行文本框',
                    type: 'textarea',
                    key: 'info',
                    remark: '请输入个人信息',
                }
                
            ],
            aa: null
   }
 },
 watch: {
       
 },
 computed: { 
       
 },
 methods: { 
       down(text){
           console.log(text);
          this['$' + text]("是否确认删除？",function(index){
              console.log(index);
          });
       },
       model(){
        //  console.log(this.modelList.filterStr("名"));
        //  console.log(this.modelList.filterStr("名",'text') );
        //  console.log(this.modelList.filterStr("(名)|(tel)",['text','key']) );
            console.log(this.modelList);
           this.aa = this.$model({
               title: '添加账户',
               formList: this.modelList,
               affrim: this.modeldata,
               readonly: true
           });
           this.aa.open();
       },
       modelopenadd(){
           this.aa.add(data => {
               console.log(res);
           });
       },
       modelopenedit(){
           this.aa.edit({"name":"e","let":"ee","lng":"嗯嗯","pass":"e","downward":1,"info":"额"});
       },
       modeldata(){
           console.log(JSON.stringify(this.aa.data));
       }
 },
 created() {
     console.log(this.$IsPC());
},
 mounted() {
       
}
}
</script>

<style lang='less' scoped>
    .button{
        margin: 10px;
        padding: 5px;
        border-radius:  3px;
        box-shadow: 1px 1px 5px #000;
        text-align: center;
    }
</style>
