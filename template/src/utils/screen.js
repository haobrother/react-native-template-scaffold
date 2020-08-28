/*
 * @作者: haobrother
 * @日期: 2020-08-24 16:31:20
 * @描述: 屏幕尺寸缩放工具，根据比例缩放尺寸，以在不同分辨率/dpi的屏幕达到与设计稿一致的视觉体验
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-24 16:31:20
 */
/*
 设备的像素密度，例如：
 PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
 PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
 PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6,xhdpi Android 设备 (320 dpi)
 PixelRatio.get() === 3          iPhone 6 plus , xxhdpi Android 设备 (480 dpi)
 PixelRatio.get() === 3.5        Nexus 6, xxxhdpi Android 设备 (560 dpi)
 */

import {Dimensions} from 'react-native';

// 获取屏幕物理尺寸
const SCREEN_WIDTH = Dimensions.get('window').width;

// 设计稿宽度(以iphone6为基准,以所有屏幕尺寸下的显示效果都一致)
const DESIGN_WIDTH = 750; // iphone6实际dp值
const defaultPixelRatio = 2; // iphone6像素密度
// dp转px
const logicPixel = DESIGN_WIDTH / defaultPixelRatio; // 以iphone6为例，375px
// 计算缩放比例
const scale = SCREEN_WIDTH / logicPixel;

// size为设计稿对应字体大小的dp值，根据默认的dpr转化对应px值
export function text(size) {
  return size / defaultPixelRatio;
}
// size为设计稿对应尺寸的dp值，这里进行等比缩放
export function px(size) {
  return Math.round(size * scale + 0.5) / defaultPixelRatio;
}
