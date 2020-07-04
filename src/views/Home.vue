<template>
  <div id="app-box">
    <div @click="msg">弹出</div>
    <router-view/>
    </div>
</template>
<script>

export default {
  name: "home",
  components:{
  },
  data() {
    return {
           
    };
  },
  created() {
    console.log(this);
    
  },
  methods: {
    msg(){
      this.$msg("登录成功", {time:3},() => {
      console.log(123);
    });
    }
  },
}
</script>

<style lang="scss" >

body{
      margin: 0;
      
}
#app-box{
 //margin-top: -10px;  
 height: 100%;
 padding-bottom:50px; 
}


</style>
