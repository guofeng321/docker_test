<template>
<div>
    <p>屏幕高度：{{screenHeight}}</p>
    <p>屏幕宽度：{{screenWidth}}</p>
    <p>屏幕可用高度：{{screenAvailHeight}}</p>
    <p>屏幕可用宽度：{{screenAvailWidth}}</p>
    <p>页面可用高度：{{clientHeight}}</p>
    <p>页面可用宽度：{{clientWidth}}</p>
</div>
</template>

<script>
export default {
    data(){
        return {
            screenHeight: window.screen.height,
            screenWidth: window.screen.width,
            screenAvailHeight: window.screen.availHeight,
            screenAvailWidth: window.screen.availWidth,
            clientHeight: document.documentElement.clientHeight,
            clientWidth: document.documentElement.clientWidth,
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
    div{
        
        p{
        
            margin: 0 auto;
            width: 70%;
            margin-bottom: 10px;
        }
    }
</style>
