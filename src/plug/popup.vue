<template>
<div>
    <div :class="['masking', 'iconfont', (status && ismasking) ? 'maskingShow' : '']" @mousemove.stop @click="hide"></div>
    <div  :class="['popup', animate ? 'show' : '']" :style="{boxShadow: (status && ismasking) ? '1px 1px 50px rgba(0,0,0,.3)' : '', zIndex: z_index}">
        <slot></slot>
    </div>
</div>
    
</template>

<script>
export default {
 components: {
       
 },
 props: {
     ismasking: {
     },
     z_index: {

     }
 },
 data() {
   return {
       animate: false,
       status: false,
   }
 },
 watch: {
       
 },
 computed: { 
       
 },
 methods: { 
     show(){
        this.status = true;
        this.animate = true;
     },
     hide(){
        this.animate = false;
        this.status = false;
     }
       
 },
 created() {
       
},
 mounted() {
       
}
}
</script>

<style lang='less' scoped>
@import url('./css/public.less');
</style>
