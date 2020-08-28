/*
 * @作者: haobrother
 * @日期: 2020-08-24 16:26:09
 * @描述: Http封装
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-24 16:26:09
 */

import axios from 'axios';
import URL from '../config/url';

// axios默认配置
const defaultConfig = {
  baseURL: URL.APP_URL,
  timeout: 3000,
};

// 请求拦截模版
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// 响应拦截模版
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

// // 错误处理模版,使用时参照catch方法即可
// axios.get('/user/12345').catch(function (error) {
//   if (error.response) {
//     // The request was made and the server responded with a status code
//     // that falls out of the range of 2xx
//     console.log(error.response.data);
//     console.log(error.response.status);
//     console.log(error.response.headers);
//   } else if (error.request) {
//     // The request was made but no response was received
//     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//     // http.ClientRequest in node.js
//     console.log(error.request);
//   } else {
//     // Something happened in setting up the request that triggered an Error
//     console.log('Error', error.message);
//   }
//   console.log(error.config);
// });

// GET请求
// 参数：
//      url，主域名后的具体资源路径，如/login，/logout等
//      params，拼接到请求字符串后方的key&value对
//      config，axios请求配置项(https://github.com/axios/axios#request-config)
function GET(url = '', params = {}, config = {}) {
  return axios.get(url, Object.assign({}, defaultConfig, {params}, config));
}

// POST请求
// 参数：
//      url，主域名后的具体资源路径，如/login，/logout等
//      data，添加到请求体（request body）data
//      config，axios请求配置项(https://github.com/axios/axios#request-config)
function POST(url = '', data = {}, config = {}) {
  return axios.post(url, data, Object.assign({}, defaultConfig, config));
}

// PUT请求
// 参数：
//      url，主域名后的具体资源路径，如/login，/logout等
//      data，添加到请求体（request body）data
//      config，axios请求配置项(https://github.com/axios/axios#request-config)
function PUT(url = '', data = {}, config = {}) {
  return axios.put(url, data, Object.assign({}, defaultConfig, config));
}

export default {
  GET,
  POST,
  PUT,
};
