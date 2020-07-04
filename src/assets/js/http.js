import axios from 'axios';
import QS from 'qs';

let AxiosConfig = {
  //baseURL: '/v2/',
  timeout: 6000,
  withCredentials: true,
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
  maxContentLength: 5000
}



if (location.hostname == '192.168.2.125' || location.hostname == 'localhost') {
  // 卢 本地
 //AxiosConfig.baseURL = 'http://192.168.2.127:8000/';
  //高 线上测试
//AxiosConfig.baseURL = 'http://47.93.229.113:8083/v2';
 //  卢  线上测试 
AxiosConfig.baseURL = 'http://47.93.229.113:8089/';
 
}
var AxiosSND = axios.create(AxiosConfig)

export function get(url, params) {
  // console.log(url);
  return new Promise((resolve, reject) => {
    AxiosSND.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.response)
    })
  });
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    AxiosSND.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        // console.log(err.response,typeof(err.response));
        // console.log(err.request);
        reject(err.response)
      })
  });
}
export function put(url, params) {
  return new Promise((resolve, reject) => {
    AxiosSND.put(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        // console.log(err.response,typeof(err.response));
        // console.log(err.request);
        reject(err.response)
      })
  });
}



