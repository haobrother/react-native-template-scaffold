/*
 * @作者: haobrother
 * @日期: 2020-09-08 12:04:12
 * @描述: 补充yaqrcode模块的类型声明
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-09-08 12:04:12
 */

interface opt {
  size: number;
  typeNumber?: number;
  errorCorrectLevel?: string;
}

declare module 'yaqrcode' {
  export default function qrcode(text: string, options: opt): string;
}
