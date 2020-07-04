import msg from './msg'
import confirm from './confirm'
import model from './model'

import './iconfont/iconfont.css'

var $vm = {};
var vue = null;

export default {
    install(Vue) {
        vue = Vue;
        Vue.prototype.$msg = (text, params, call) => {

            toload(msg, '$msgVm').open(text, params, call);
        }

        Vue.prototype.$confirm = (text, params, call) => {

            toload(confirm, '$confirmVm').open(text, params, call);
        }

        Vue.prototype.$model = (formList) => {
            console.log(formList);
            return new Cmodel(formList);
        }

        Vue.prototype.$IsPC = () => {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        }

        console.log($vm.msg);

        toload(msg, '$msgVm');
        toload(confirm, '$confirmVm');
    }
}

class Cmodel {
    constructor(formList) {
        const msgPlugin = vue.extend(model)
        this.model = new msgPlugin().$mount()
        document.body.appendChild(this.model.$el);
        this.model.init(formList);
        Object.setPrototypeOf(this, this.model);
    }
}

var toload = (com, text) => {
    if ($vm[text]) return $vm[text];
    const msgPlugin = vue.extend(com)
    $vm[text] = new msgPlugin().$mount()
    document.body.appendChild($vm[text].$el);
    return $vm[text]
}

