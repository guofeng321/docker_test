<template>
    <Popup ref="popup" :ismasking="true" :z_index="100">
        <header>
            <p>{{props.title}}</p>
            <i @click="close()" class="pointer iconfont">&#xe62b;</i>
        </header>
        <div class="model">
            <div class="form" @keyup.enter="affirm()">
                <div
                    v-for="(item,index) in props.formList"
                    :key="index"
                    v-show="!item.hide"
                    class="line"
                >
                    <div class="lineinner">
                        <p v-html="item.text + '：'"></p>
                        <input
                            v-if="item.type == 'input'"
                            type="text"
                            :placeholder="'请输入' + item.text.replace(/\&\#12288\;/g, '')"
                            v-model="pridata[item.key]"
                            :id="item.key"
                            :disabled="item.disabled ? 'disabled' : false"
                            class="input"
                        />

                        <div v-if="item.type == 'inputs'" class="inputs">
                            <div v-for="(item1,index) in item.option" :key="index">
                                <p>{{item1.text}}：</p>
                                <input type="text" v-model="pridata[item1.key]" />
                            </div>
                        </div>

                        <input
                            v-if="item.type == 'password'"
                            type="password"
                            :placeholder="'请输入' + item.text.replace(/\&\#12288\;/g, '')"
                            v-model="pridata[item.key]"
                            :id="item.key"
                            class="password"
                            :disabled="item.disabled ? 'disabled' : false"
                        />

                        <select
                            v-if="item.type == 'select'"
                            v-model="pridata[item.key]"
                            class="select"
                            :disabled="item.disabled ? 'disabled' : false"
                        >
                            <option value selected>{{'请选择' + item.text.replace(/\&\#12288\;/g, '')}}</option>
                            <option
                                v-for="(item1, index1) in item.option"
                                :key="index1"
                                :value="item1[item.optionKey]"
                            >{{item1[item.optionValue]}}</option>
                        </select>

                        <textarea
                            v-if="item.type == 'textarea'"
                            :placeholder="'请输入' + item.text.replace(/\&\#12288\;/g, '')"
                            v-model="pridata[item.key]"
                            class="textarea"
                        ></textarea>
                    </div>

                    <div class="remark" v-if="item.remark">
                        <span>{{item.remark}}</span>
                    </div>
                </div>
                <div class="readonly" v-if="props.readonly" @click.stop></div>
            </div>
            <div class="buttonbox" v-if="!props.readonly">
                <div @click="affirm()" class="pointer">确定</div>
                <div @click="close()" class="pointer">取消</div>
            </div>
            <div class="buttonbox1" v-if="props.readonly">
                <div @click="close()" class="pointer">返回</div>
            </div>
        </div>
    </Popup>
</template>

<script>
import Popup from "./popup";

// let watchCompany_name = {};
export default {
    components: {
        Popup
    },
    props: {},
    data() {
        return {
            props: {
                formList: [],
                title: "",
                readonly: false,
                isListener: false,
            },
            pridata: {},
            oldcompany_name: ""
        };
    },
    watch: {},
    beforeCreate() {},
    computed: {},
    methods: {
        open(data, props) {
            if (props) {
                for (let item in props) {
                    this.props[item] = props[item];
                }  
            }  

            
            
            let formList = this.props.formList;
            for (var i = 0; i < formList.length; i++) {
                data[formList[i].key] = data[formList[i].key] || "";
            }

            if(this.props.isListener){
                this.pridata = data;
            }else {
                this.pridata = JSON.parse(JSON.stringify(data));
            }

            
            this.$refs.popup.show();
        },
        add(affrim) {
            this.open({}, {
                affrim: affrim,
                title: "添加" + this.all.title,
                formList: this.all.formListAdd,
            });
        },
        eidt(data, affrim) {
            this.open(data, {
                affrim: affrim,
                title: "编辑" + this.all.title,
                formList: this.all.formListEdit,
            })
        },
        init(all) {
            console.log(all);
            this.props = this.all = all;
        },
        close() {
            this.$refs.popup.hide();
        },
        affirm() {
            let formList = this.props.formList;
            for (let i = 0; i < formList.length; i++) {
                if (formList[i].type == "inputs") {
                    for (let v = 0; v < formList[i].option.length; v++) {
                        if (
                            !this.pridata[formList[i].option[v].key] &&
                            !formList[i].option[v].hide
                        ) {
                            if (formList[i].type == "select") {
                                this.$msg(
                                    "请选择" +
                                        formList[i].option[v].text.replace(
                                            /&#12288;/g,
                                            ""
                                        )
                                );
                            } else {
                                this.$msg(
                                    "请输入" +
                                        formList[i].option[v].text.replace(
                                            /&#12288;/g,
                                            ""
                                        )
                                );
                            }
                            return;
                        }
                    }
                } else if (
                    !this.pridata[formList[i].key] &&
                    !formList[i].hide &&
                    !formList[i].optional
                ) {
                    if (formList[i].type == "select") {
                        this.$msg(
                            "请选择" + formList[i].text.replace(/&#12288;/g, "")
                        );
                    } else {
                        this.$msg(
                            "请输入" + formList[i].text.replace(/&#12288;/g, "")
                        );
                    }

                    return;
                }
            }

            // if (
            //     this.pridata.affirmpassword &&
            //     this.pridata.newpass &&
            //     this.pridata.affirmpassword != this.pridata.newpass
            // ) {
            //     this.$msg("两次输入的密码不一致");
            //     return;
            // }

            // if (
            //     this.pridata.company_tel &&
            //     this.pridata.company_tel.length != 11
            // ) {
            //     this.$msg("请输入正确的企业联系电话");
            //     return;
            // }

            // this.$refs.popup.hide();
            this.props.affrim(this.pridata);
        }
    },
    created() {
        // console.log(this.oldcompany_name);
    },
    mounted() {}
};
</script>

<style lang='less' scoped>
@import url("./css/public.less");

header {
    line-height: 45px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    i {
        cursor: pointer;
    }
}
.model {
    background-color: #fff;
    padding: 20px;
    opacity: 1;
    width: 50vw;

    .form {
        position: relative;
        font-size: 14px;
        .line {
            position: relative;
            margin-bottom: 20px;
            .lineinner {
                display: flex;

                > p {
                    width: 8em;
                    min-width: 8em;
                    margin-right: 5px;
                    line-height: 45px;
                    text-align: right;
                }
                input {
                    flex: 1;
                    padding: 5px 10px;
                    border: 1px solid #ccc;
                    line-height: 35px;
                    font-size: 14px;
                }
                select {
                    font-size: 14px;
                    flex: 1;
                    padding: 5px 10px;
                    border: 1px solid #ccc;
                    line-height: 35px;
                    option {
                        &:first-child {
                            color: #ccc;
                        }
                    }
                }
                textarea {
                    flex: 1;
                    padding: 5px 10px;
                    border: 1px solid #ccc;
                    line-height: 35px;
                }
                #output {
                    position: absolute;
                    left: 8em;
                    top: 47px;
                    background-color: #fff;
                    width: calc(100% - 8em);
                    z-index: 90;
                    padding: 0 10px;
                }
                .inputs {
                    display: flex;
                    flex: 1;
                    > div {
                        border: 1px solid #ccc;
                        display: flex;
                        margin-right: 20px;
                        padding: 0 10px;
                        flex: 1;
                        input {
                            flex: 1;
                            border: none;
                            padding: 0;
                            width: 1px;
                        }
                        p {
                            width: auto;
                            margin: 0;
                            line-height: 45px;
                        }
                    }
                    > div:last-child {
                        margin: 0;
                    }
                }
            }
            .remark {
                margin-left: 117px;
                margin-top: 10px;
                color: #999;
            }
        }
        .readonly {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
    }
    .buttonbox {
        display: flex;
        justify-content: center;
        div {
            width: 10%;
            line-height: 36px;
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
    .buttonbox1 {
        display: flex;
        justify-content: center;
        div {
            width: 10%;
            line-height: 36px;
            text-align: center;
            cursor: pointer;
            user-select: none;
            & {
                border: 1px solid @Cblue;
                color: @Cblue;
            }
        }
    }
    .modelbut {
        width: 7em;
        line-height: 45px;
        background-color: @Cblue;
        color: #fff;
        text-align: center;
        display: block;
        cursor: pointer;
    }
}

input,
select,
textarea {
    outline: none;
    min-width: 1px;
}
</style>
