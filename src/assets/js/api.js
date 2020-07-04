import { get, post ,put } from './http'
class Api {
    constructor(url, method) {
      this.url = url;
      this.method = method;
      if (this.method == 'post') {
        this.post = function (params,) {
          return post(this.url, params);
        };
      }
      else if (this.method == 'get') {
        this.get = function (params) {
          return get(this.url, params);
        };
      }else if(this.method == 'put'){
        this.put = function (params) {
          return put(this.url, params);
        };
      }
    }
  }
  //设备管理
export const device = new Api ('/device/device_manage/','post')
//设备详情
export const device_detail = new Api ('/device/device_detail/','post')
//首页
export const index = new Api ('/device/index_data/','post')
//预警信息
export const warning_list = new Api ('/device/warning_info/','post')
//告警信息
export const alarm_list = new Api ('/device/alarm_info/','post')
// 阈值设置
export const threshold_info = new Api ('/device/threshold_info/','post')
//通知人列表
export const user_list = new Api ('/device/user_list/','post')
//阈值设置信息
export const threshold_edit = new Api ('/device/threshold_edit/','post')
//登录
export const login = new Api ('/device/login/','post')

export const ajaxhttps = new Api ('https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code', 'post')


