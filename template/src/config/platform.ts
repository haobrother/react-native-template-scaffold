/*
 * @作者: haobrother
 * @日期: 2020-08-25 16:45:10
 * @描述: 平台特定代码
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-25 16:45:10
 */

import {Dimensions, Platform} from 'react-native';

// iPhoneX Xs
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iPhoneXR XsMax
const XR_WIDTH = 414;
const XR_HEIGHT = 896;

// 获取屏幕物理尺寸
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

//判断是否为iphoneX或Xs
export function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    ((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) ||
      (SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT))
  );
}

//判断是否为iphoneXR或XsMAX
export function isIphoneXR() {
  return (
    Platform.OS === 'ios' &&
    ((SCREEN_HEIGHT === XR_HEIGHT && SCREEN_WIDTH === XR_WIDTH) ||
      (SCREEN_HEIGHT === XR_WIDTH && SCREEN_WIDTH === XR_HEIGHT))
  );
}
