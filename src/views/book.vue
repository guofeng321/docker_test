<template>
<div class="outer">
    <div class="con"></div>
    <div class="bgleft" :style="{backgroundImage: 'url(' + a_left + ')'}"></div>
    <div class="bgright" :style="{backgroundImage: 'url(' + a_right + ')'}"></div>
    <div class="heng">
        <img src="../assets/img/b_left.png">
        <div class="heng_c" :style="{backgroundImage: 'url(' + b + ')'}"></div>
        <img src="../assets/img/b_right.png">
    </div>
    
    <div class="con"></div>
    <div class="heng">
        <img src="../assets/img/b_left.png">
        <div class="heng_c" :style="{backgroundImage: 'url(' + b + ')'}"></div>
        <img src="../assets/img/b_right.png">
    </div>
    <div class="con"></div>
</div>
</template>

<script>
export default {
data(){
    return {
        a_left: require("../assets/img/a_left.jpg"),
        a_right: require("../assets/img/a_right.jpg"),
        b: require("../assets/img/b.png"),
    }
},
 components: {
 },
 props: {
 },
 watch: {
 },
 computed: { 
 },
 methods: { 
 },
 created() {
},
 mounted() {
}
}
</script>

<style lang='scss' scoped>
    .outer{
        height: 100vh;
        position: relative;
    }

    .bgleft,.bgright{
        position: absolute;
        
        background-size: 100%;
        background-repeat: repeat-y; 
        top: 0;
        bottom: 0;
        z-index: 0;
    }

    .bgleft{
        left: 0;
        width: 40px;
    }

    .bgright{
        right: 0;
        width: 42px;
    }

    .con{
        height: 150px;
    }

    .heng{
        margin-left: 24px;
        margin-right: 26px;
        width: calc(100vw - 50px);
        position: absolute;
        display: flex;     
        justify-content: space-between;
        img:first-child{
            width: 16px;
        }
        img:last-child{
            width: 16px;
        }
        div{
            flex-grow: 1;
            width: 100%;
            flex: 1;
        }
    }

    // width: calc(100vw - 50px);
    //     position: absolute;
    //     margin-left: 24px;
    //     margin-right: 26px;
</style>
