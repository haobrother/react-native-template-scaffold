/*
 * @作者: haobrother
 * @日期: 2020-08-24 16:29:25
 * @描述: 工具函数集
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-24 16:29:25
 */

import dayjs from 'dayjs';
import qrcode from 'yaqrcode';

// 时间处理库dayjs示例,详情查看: https://github.com/iamkun/dayjs/blob/dev/docs/zh-cn/README.zh-CN.md
function nowtime() {
  return dayjs().format();
}

// 根据url生成二维码的base64编码
function genQRCode(url: string, size: number = 200): string {
  return qrcode(url, {
    size,
  });
}

export {nowtime, genQRCode};
