<template>
<div>
    <input v-model="msg"></input>
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
       msg: '',
   }
 },
 watch: {
     msg(newVal){
         this.msg = newVal + 1;
     }
       
 },
 computed: { 
       
 },
 methods: { 
       
 },
 created() {
       console.log(1);
},
 mounted() {
       
}
}
</script>

<style lang='less' scoped>

</style>
