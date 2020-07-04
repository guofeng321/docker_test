<template>
    <div>
        <!-- <label for="leaveWord" @click.stop="show()"></label> -->
        <!-- <LeaveWord v-on:hide="hide" :sofh="sofh" ref="leaveWord"></LeaveWord> -->
        <div>{{yue}}</div>
        <div>{{val}}</div>
        <div ref="charts" style="width:300px;height:300px;"></div>
    </div>
</template>

<script>
// import LeaveWord from '@/components/leaveWord'
export default {
    components: {},
    data() {
        return {
            sofh: false,
            month_list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            month_data: [
                            "1月",
                            "2月",
                            "3月",
                            "4月",
                            "5月",
                            "6月",
                            "7月",
                            "8月",
                            "9月",
                            "10月",
                            "11月",
                            "12月"
                        ],
            yue: "",
            val: "",
        };
    },
    props: {},
    watch: {},
    computed: {},
    methods: {
        init() {
            var _this = this;
            this.$nextTick(() => {
                // var myCategory = this.echarts.init(this.$refs.charts);
                // var option = {
                //     xAxis: {
                //         type: "category",
                //         data: [
                //             "1月",
                //             "2月",
                //             "3月",
                //             "4月",
                //             "5月",
                //             "6月",
                //             "7月",
                //             "8月",
                //             "9月",
                //             "10月",
                //             "11月",
                //             "12月"
                //         ]
                //     },
                //     yAxis: {
                //         name: "(元)",
                //         type: "value",
                //         splitLine: {
                //             show: false
                //         }
                //     },
                //     tooltip: {
                //         trigger: "axis"
                //     },
                //     series: [
                //         {
                //             data: this.month_list,
                //             type: "line"
                //         }
                //     ]
                // };
                // myCategory.setOption(option);
                // myCategory.on('click', function(params){
                //     console.log(params);
                // });

                // 基于准备好的dom，初始化ECharts实例
var myCategory = this.echarts.init(this.$refs.charts);

// 指定图表的配置项和数据
var option = {
                    xAxis: {
                        type: "category",
                        data:_this.month_data
                    },
                    yAxis: {
                        name: "(元)",
                        type: "value",
                        splitLine: {
                            show: false,
                            
                        }
                    },
                    tooltip: {
                        trigger: "axis",
                     formatter: function (params) {
                            return "";
                        },
                    },
                    series: [
                        {
                            data: this.month_list,
                            type: "line"
                        }
                    ]
                };
// 使用刚指定的配置项和数据显示图表。
myCategory.setOption(option);
// 处理点击事件并且跳转到相应的百度搜索页面
myCategory.on('click','dataZoom', function(params){
    console.log(params)
});
myCategory.on('mousemove','series',function(params){
   _this.yue = params.name;
            _this.val = params.data;
});
myCategory.off('showTip');//这里是为了防止多次注册事件
myCategory.on('showTip',function(param){
    
    let nowDataIndex = param.dataIndex;
    console.log(param)
    _this.month = _this.month_list[nowDataIndex];
    _this.val = _this.month_data[nowDataIndex];
});
            });
        },
        showMsg(params){
            this.yue = params.name;
            this.val = params.data;
            console.log(params);
        }
    },
    created() {
        this.init();
    },
    mounted() {}
};
</script>

<style lang='scss' scoped>
label {
    height: 50px;
    background-color: aquamarine;
    display: block;
}
</style>
