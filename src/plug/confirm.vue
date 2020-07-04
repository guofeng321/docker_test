<template>
    <Popup ref="popup"  :ismasking="true" :z_index="105"> 
        <div class="inner" v-if="!ispc">
            <p class="msg">{{text}}</p>
            <div>
                <p v-for="(item,index) in butt" :key="index" @click="down(index)">{{item}}</p>
            </div>
        </div>
        <div class="innerpc" v-if="ispc">
            <header>
                <p>提示</p>
                <i @click="close()" class="pointer iconfont">&#xe62b;</i>
            </header>
            <p class="msg">{{text}}</p>
            <div class="buttonbox">
                <div @click="down()" class="pointer">确定</div>
                <div @click="close()" class="pointer">取消</div>
            </div>
        </div>
    </Popup>
</template>

<script>
import Popup from './popup'
export default {
    components: {
        Popup
    },
    props: {},
    data() {
        return {
            text: "",
            butt: ['取消','确认'],
            time: null,
            call: null,
            ispc: this.$IsPC(),
        };
    },
    watch: {},
    computed: {},
    methods: {
        open(text, params, call) {
            console.log(text);
            if(this.$refs.popup.status) return;

            params = params || {};
            if (typeof params == "function"){ call = params; params = {}}

            this.text = text;
            this.call = call || function(){};

            this.$refs.popup.show();
        },
        down(index) {
            this.call(index);
            this.$refs.popup.hide();
        },
        close() {
            this.$refs.popup.hide();
        }
    },
    created() {},
    mounted() {}
};
</script>

<style lang='less' scoped>
@import url('./css/public.less');
.inner{
    background-color: #fff;
    // padding: 5px 0;
    min-width: 80vw;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    >p{
        line-height: 1.5em;
        padding: 20px 10px;
    }
    div{
        line-height: 45px;
        border-top: 1px solid #ccc;
        display: flex;
        p{
            flex: 1;
            border-right: 1px solid #eee;
        }
    }
    
}

.innerpc{
    background-color: #fff;
    // padding: 5px 0;
    width: 260px;
    // border-radius: 5px;
    // text-align: center;
    font-size: 14px;

    header {
        line-height: 45px;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        background-color: #f8f8f8;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        i{
            cursor:pointer;
        }
    }

    >p{
        line-height: 1.5em;
        padding: 20px 10px;
    }
    // div{
    //     line-height: 45px;
    //     border-top: 1px solid #ccc;
    //     display: flex;
    //     p{
    //         flex: 1;
    //         border-right: 1px solid #eee;
    //     }
    // }
    .buttonbox {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 12px;
        padding-right: 12px;
        div {
            width: 64px;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
            user-select: none;
            &:nth-child(1) {
                background-color: @Cblue;
                color: #fff;
                margin-right: 20px;
            }
            &:nth-child(2) {
                border: 1px solid @Cblue;
                color: @Cblue;
            }
        }
    }
    
}

</style>
