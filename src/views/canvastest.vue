<template>
    <div class="outer">
        <canvas id="canvas" ref="can" width="500" height="600"></canvas>
        <!-- <div ref="mydiv">{{num}}</div> -->
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            num: 0,
            img: require("@/assets/img/katong.png"),
            data: [],
            canvas: null,
            context: null,
            dan: 100,
            wh: 2,
            meici: 0
        };
    },
    watch: {},
    computed: {},
    methods: {
        auto() {
            let _this = this;
            if (this.meici < _this.data.length) {
                this.meici = this.meici + 80 >  _this.data.length? _this.data.length : this.meici + 80;
            }
            for (let i = 0; i < this.meici; i++) {
                if (_this.data[i].color.indexOf(",0)") == -1) {
                    
                    if(!_this.data[i].terminus){
                        _this.context.clearRect(
                            _this.data[i].initposition.x,
                            _this.data[i].initposition.y,
                            this.wh,
                            this.wh
                        );
                        if (
                            _this.data[i].initposition.x > _this.data[i].position.x
                        ) {
                            if (this.meici > 4000) {
                                _this.data[i].initposition.x -= 10;
                            } else if (this.meici > 2000) {
                                _this.data[i].initposition.x -= 6;
                            } else {
                                _this.data[i].initposition.x -= 3;
                            }

                            if (
                                _this.data[i].initposition.x <
                                _this.data[i].position.x
                            ) {
                                _this.data[i].initposition.x =
                                    _this.data[i].position.x;
                            }
                        } else if (
                            _this.data[i].initposition.x < _this.data[i].position.x
                        ) {
                            if (this.meici > 4000) {
                                _this.data[i].initposition.x += 10;
                            } else if (this.meici > 2000) {
                                _this.data[i].initposition.x += 6;
                            } else {
                                _this.data[i].initposition.x += 3;
                            }

                            if (
                                _this.data[i].initposition.x >
                                _this.data[i].position.x
                            ) {
                                _this.data[i].initposition.x =
                                    _this.data[i].position.x;
                            }
                        }
                        if (
                            _this.data[i].initposition.y > _this.data[i].position.y
                        ) {
                            _this.data[i].initposition.y -= _this.random(5, 10);
                            if (
                                _this.data[i].initposition.y <
                                _this.data[i].position.y
                            ) {
                                _this.data[i].initposition.y =
                                    _this.data[i].position.y;
                            }
                        } else if (
                            _this.data[i].initposition.y < _this.data[i].position.y
                        ) {
                            _this.data[i].initposition.y += _this.random(5, 10);
                            if (
                                _this.data[i].initposition.y >
                                _this.data[i].position.y
                            ) {
                                _this.data[i].initposition.y =
                                    _this.data[i].position.y;
                            }
                        }
                        if (
                            _this.data[i].initposition.y ==
                                _this.data[i].position.y &&
                            _this.data[i].initposition.x == _this.data[i].position.x
                        ) {
                            // console.log(_this.data[i].initposition.y, _this.data[i].position.y, _this.data[i].initposition.x, _this.data[i].position.x);
                            _this.data[i].terminus = true;
                        }
                    }

                    _this.context.fillStyle = _this.data[i].color; // 设置或返回用于填充绘画的颜色、渐变或模式

                    _this.context.fillRect(
                        _this.data[i].initposition.x,
                        _this.data[i].initposition.y,
                        this.wh,
                        this.wh
                    ); // x轴 y轴 宽 和 高 ,绘制“被填充”的矩形

                    
                }
            }
            this.num++;
        
            // setTimeout(function(){
            window.requestAnimationFrame(_this.auto);
            // },1)
        },
        random(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    },
    created() {
        this.$nextTick(() => {
            let y = 0;

            var canvas = this.$refs.can;
            var context = canvas.getContext("2d");
            console.log(canvas);
            console.log(context);
            var oimg = new Image();
            var _this = this;
            oimg.onload = function() {
                console.log(oimg.width);
                context.drawImage(oimg, 0, 0);
                var imgdatas = context.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                ).data;
                console.log(imgdatas);
                context.clearRect(0, 0, canvas.width, canvas.height);
                for (let i = 0; i < imgdatas.length; i += 4 * _this.wh) {
                    _this.data.push({
                        color:
                            "rgba(" +
                            imgdatas[i] +
                            "," +
                            imgdatas[i + 1] +
                            "," +
                            imgdatas[i + 2] +
                            "," +
                            imgdatas[i + 3] +
                            ")",
                        position: {
                            x: (i / 4) % canvas.width,
                            y: parseInt(i / 4 / canvas.width)
                        },
                        initposition: {
                            x: _this.random(0, canvas.width),
                            y: canvas.height
                        }
                    });

                    if (
                        i ==
                        (canvas.width - _this.wh +
                            canvas.width * parseInt(i / (canvas.width * 4))) * 4
                    ) {
                        y++;
                        console.log(i,);
                        i += canvas.width * 4 * _this.wh - canvas.width * 4;
                    }
                }
                console.log(y);
                _this.auto();
            };
            oimg.src = this.img;
            this.canvas = canvas;
            this.context = context;
        });
    },
    mounted() {}
};
</script>

<style lang='less' scoped>
.outer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
}
</style>
