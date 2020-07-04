<template>
    <div id="container" class="container"></div>
</template>
<script>
import AMap from "AMap";
export default {
    created() {
        setTimeout(function() {
            const map = new AMap.Map("container");

            const layer = new Loca.LineLayer({
                eventSupport: true,
                map: map
            });

            layer.on("mousemove", function(ev) {
                console.log("Click target: ", ev.target); // 触发click事件的元素
                console.log("Event type: ", ev.type); // 事件名称
                console.log("Raw Event: ", ev.originalEvent); // 原始DomEvent事件
                console.log("Raw data: ", ev.rawData); // 触发元素对应的原始数据
                console.log("LngLat: ", ev.lnglat); // 元素所在经纬度
            });

            let citys = [
                {
                    lnglat: ["116.3648,39.9993", "120.3647,59.8593"],
                    name: "哈哈哈"
                }
            ];

            layer.setData(citys, {
                lnglat: "lnglat"
            });

            layer.setOptions({
                style: {
                    color: "#4FC2FF",
                    opacity: 0.9,
                    lineWidth: 20
                }
            });

            // 渲染
            layer.render();
        });
    }
};
</script>



<style>
html,
body,
#container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
</style>