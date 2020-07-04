<template>
<div>
    <v-table
            class="vtable"
            style="width:100%"
            is-horizontal-resize
             :columns="columns"
             :table-data="tableData"
    ></v-table>
</div>
</template>

<script>
import Vue from 'vue'
export default{
        data() {
            return {
                 tableData: [
                     {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
                     {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
                     {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
                     {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
                     {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
                 ],
                columns: [
                    {field: 'name', title:'姓名', width: 1, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'tel', title: '手机号码', width: 1, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'hobby', title: '爱好', width: 1, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'address', title: '地址', width: 1, titleAlign: 'center',columnAlign:'left',isResize:true},
                    {field: 'custome-adv', title: '操作',width: 1, titleAlign: 'center',columnAlign:'center',componentName:'table-operation',isResize:true}
                ]
            }
        }
    }

// 自定义列组件
    Vue.component('table-operation',{
        template:`<span>
        <a href="" @click.stop.prevent="update(rowData,index)" v-if="rowData.name == '赵伟'">编辑</a>&nbsp;
        <a href="" @click.stop.prevent="deleteRow(rowData,index)">删除</a>
        </span>`,
        props:{
            rowData:{
                type:Object
            },
            field:{
                type:String
            },
            index:{
                type:Number
            }
        },
        methods:{
            update(a,b){
                console.log(a,b);
                console.log(this.rowData,this.filed,this.index);
               // 参数根据业务场景随意构造
               let params = {type:'edit',index:this.index,rowData:this.rowData};
               this.$emit('on-custom-comp',params);
            },

            deleteRow(){

                // 参数根据业务场景随意构造
                let params = {type:'delete',index:this.index};
                this.$emit('on-custom-comp',params);

            }
        }
    })
</script>

<style lang='less' scoped>
.vtable{
    width: 100vw;
}
</style>
