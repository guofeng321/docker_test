<template>
    <div>
        <div class="box">
            <canvas id="a123"></canvas>
        </div>
    </div>
</template>

<script>
const F2 = require("@antv/f2/lib/index");
const ScrollBar = require("@antv/f2/lib/plugin/scroll-bar");
const pan = require("@antv/f2/lib/interaction/pan");
export default {
    components: {},
    props: {},
    data() {
        return {
            data: [{"road":"a1","value":78,"a":"小垃圾"},{"road":"a2","value":23,"a":"小垃圾"},{"road":"a3","value":12,"a":"小垃圾"},{"road":"a4","value":31,"a":"小垃圾"},{"road":"a5","value":53,"a":"小垃圾"},{"road":"a6","value":21,"a":"小垃圾"},{"road":"a7","value":205,"a":"小垃圾"}]
        };
    },
    watch: {},
    computed: {},
    methods: {
        formatNumber(n) {
            return String(Math.floor(n * 100) / 100).replace(
                /\B(?=(\d{3})+(?!\d))/g,
                ","
            );
        },
        init() {
            let data = this.data;
            const originDates = [];
            data.forEach(function(item,index) {
                if(index < 4){
                    originDates.push(item.road);
                }

            });

            const chart = new F2.Chart({
                id: "a123",
                pixelRatio: window.devicePixelRatio,
                plugins: [ScrollBar,pan],
                width: window.screen.availWidth,
                height: 300,
            });
            console.log(originDates);
            console.log(data);
            chart.source(data, {
                road: {
                    // type: "timeCat",
                    tickCount: 5,
                    values: originDates,
                    // mask: "MM-DD"
                },
            });

            chart
                .interval()
                .position("road*value");

            // 定义进度条
            chart.scrollBar({
                mode: "x",
                xStyle: {
                    backgroundColor: "#e8e8e8",
                    fillerColor: "#808080",
                    offsetY: -2
                }
            });
            chart.interaction("pan");
            chart.render();
        }
    },
    created() {
        var _this = this;
        setTimeout(function(){
            _this.init();
        },1000)
        
    },
    mounted() {}
};
</script>

<style lang='less' scoped>
</style>
