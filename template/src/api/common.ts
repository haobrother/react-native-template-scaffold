/*
 * @作者: haobrother
 * @日期: 2020-08-24 17:09:31
 * @描述: 通用功能接口
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-24 17:09:31
 */

import http from 'utils/http';
// 对于POST和PUT请求的数据需要使用qs进行URLEncoded编码处理(qs.stringify(),详情看https://github.com/ljharb/qs)
import Qs from 'qs';

// GET请求模版(URL路径参数)
function getRequest(param1: string, param2: string) {
  return http.GET('/path1/' + param1 + '/' + param2);
}

// GET请求模版2(querystring参数)
function getRequest2(param1: string, param2: number) {
  return http.GET('/path1', {param1, param2});
}

// POST请求模版
function postRequest(data1: string, data2: string) {
  let data = Qs.stringify({data1, data2}, {allowDots: true});
  return http.POST('/path2' + data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

// PUT请求模版
function putRequest(data1: boolean, data2: string, data3: string) {
  let data = Qs.stringify({data1, data2, data3}, {allowDots: true});
  return http.PUT('/path3' + data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

export default {
  getRequest,
  getRequest2,
  postRequest,
  putRequest,
};
