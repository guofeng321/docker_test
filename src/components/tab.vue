<template>
    <div class="outer">
        <div class="top">
            <ul class="inner">
                <li v-for="(item,index) in items" :key="index" @click="setIndex(index)">{{item}}</li>
            </ul>
            <div class="line" :style="{left: (priIndex*iw + kw * (priIndex+1)) + '%', width: iw + '%'}"></div>
        </div>
        <div class="con" :style="{height: height}">
            <ul
                :style="{width: Ww * items.length + 'px', transform: 'translateX(-' + (priIndex*Ww + moveNum) + 'px)',transition: moveStart ? '' : 'transform .3s'}"
                @touchstart="setMoveNum"
                @touchmove="setMoveNum"
                @touchend="setMoveNum"
            >
                <li v-for="(item,index) in items" :key="index" :style="{height: height}">
                    <slot :name="index"></slot>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { setInterval } from "timers";
export default {
    name: "Tab",
    components: {},
    data() {
        return {
            Ww: document.documentElement.clientWidth,
            priIndex: 0,
            kw: "",
            iw: parseInt(this.Ww / this.index),
            moveNum: 0,
            moveStart: 0,
            moveStartY: 0,
            moveStatus: "",
        };
    },
    props: {
        items: {
            type: Array,
            required: true
        },
        index: {
            type: Number,
            default: 0
        },
        height: {
            type: String,
            required: true,
            default: 'auto'
        }
    },
    watch: {
        index: {
            handler(newName, oldNmae) {
                this.priIndex = newName;
            },
            immediate: true
        },
        kw: {
            handler(newName, oldName) {
                // console.log(this.ww,this.index);
                this.kw = 100 % this.items.length;
            },
            immediate: true
        },
        iw: {
            handler(newName, oldName) {
                this.iw = parseInt(
                    (100 - this.kw * this.items.length) / this.items.length
                );
            },
            immediate: true
        }
    },
    computed: {},
    methods: {
        setIndex(index) {
            this.moveStart = 1;
            this.priIndex = index;
        },
        setMoveNum(e) {
            // console.log(e);
            if (e.type == "touchstart"){
                this.moveStart = 0;
                this.moveStart = e.touches[0].clientX;
                this.moveStartY = e.touches[0].clientY;
            } else if (e.type == "touchend") {
                if (Math.abs(this.moveNum) > this.Ww * 0.1) {
                    if (
                        this.moveNum > 0 &&
                        this.priIndex < this.items.length - 1
                    ) {
                        this.priIndex += 1;
                    } else if (this.moveNum < 0 && this.priIndex > 0) {
                        this.priIndex -= 1;
                    }
                }
                this.moveNum = 0;
                this.moveStart = 0;
                this.moveStatus = "";
            } else {
                if(this.moveStatus == ""){
                    if(Math.abs(this.moveStartY - e.touches[0].clientY) < Math.abs(this.moveStart - e.touches[0].clientX)){
                        this.moveStatus = 'x';
                    } else {
                       
                        this.moveStatus = 'y';
                    }
                }
                if(this.moveStatus == 'x'){
                    
                    this.moveNum = this.moveStart - e.touches[0].clientX;
                    e.preventDefault();
                }  
                
            }
        }
    },
};
</script>

<style lang='scss' scoped>
.top {
    border-bottom: 1px solid #eee;
    position: relative;
    .inner {
        display: flex;

        li {
            flex: 1;
            text-align: center;
            line-height: 45px;
        }
    }
    .line {
        position: absolute;
        bottom: 0;
        height: 2px;
        background-color: #0ec6b4;
        transition: left 0.3s;
    }
}

.con {
    width: 100vw;
    overflow-y: scroll;
    overflow-x: hidden;
    > ul {
        display: flex;
        > li {
            flex: 1;
            overflow-y: scroll;
            overflow-x: hidden;
        }
    }
}
</style>
