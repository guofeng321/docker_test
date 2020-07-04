<template>
    <Popup ref="popup" :ismasking="false" :z_index="110"> 
        <p class="msg">{{text}}</p>
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
            time: null,
        };
    },
    watch: {},
    computed: {},
    methods: {
        open(text, params, call) {
            // console.log(111);
            if(this.$refs.popup.status) return;

            let _this = this;

            params = params || {};
            if (typeof params == "function"){ call = params; params = {}}

            this.text = text;

            this.$refs.popup.show();
            this.time = setTimeout(() => {
                _this.$refs.popup.hide();

                call && call();

                _this.time = null;
            }, ((params.time) || 1) * 1000);
        }
    },
    created() {},
    mounted() {}
};
</script>

<style lang='less' scoped>
@import url('./css/public.less');
.msg {
    line-height: 1.5em;
    font-size: 16px;
    padding: 3px 1em;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 2px;
    z-index: 100;
}
</style>
