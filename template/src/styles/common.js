/*
 * @作者: haobrother
 * @日期: 2020-08-24 16:25:06
 * @描述: 公共样式
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-24 16:25:06
 */

import {px, text} from '../utils/screen';

// 颜色,尺寸可以根据项目来定制和拓展,默认的布局一般都通用,可以根据需要来拓展

export const color = {
  // 主题色
  primary: '#108ee9',
  // 背景色
  background: 'hsv(0, 0, 96%)',
  // 边框色
  border: '#ddd',
  // 标题色
  title: 'rgba(0, 0, 0, 0.85)',
  // 主文本色
  text: 'rgba(0, 0, 0, 0.65)',
  // 次文本色
  textSecondary: 'rgba(0, 0, 0, 0.45)',
  // 失效色
  disabled: 'rgba(0, 0, 0, 0.25)',
  // 成功色
  success: '#6abf47',
  // 警告色
  warning: '#ffc600',
  // 错误色
  error: '#f4333c',
  // 重要色
  important: '#ff5b05',
};

export const size = {
  // 标题字号
  title: text(36),
  // 次标题字号
  subTitle: text(28),
  // 主字号
  fontBase: text(24),
  // 边框尺寸(XS,SM,LG逐级变大)
  borderXS: px(0.25),
  borderSM: px(0.5),
  border: px(1),
  borderLG: px(2),
  // 圆角大小(XS,SM,LG逐级变大,Circle半圆角)
  radiusXS: px(2),
  radiusSM: px(4),
  radius: px(6),
  radiusLG: px(8),
  radiusCircle: '50%',
};

export const layout = {
  // 灵活布局
  flex: {
    // 横向排列
    rowBox: {
      flex: 1,
      flexDirection: 'row',
    },
    // 横向排列,垂直居中
    rowCenterBox: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    // 纵向排列,垂直居中
    columnCenterBox: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  // mixins
  border: (up, right, bottom, left) => {
    return {
      borderUpWidth: px(up),
      borderRightWidth: px(right),
      borderBottomWidth: px(bottom),
      borderLeftWidth: px(left),
    };
  },
  padding: (up, right, bottom, left) => {
    return {
      paddingUp: px(up),
      paddingRight: px(right),
      paddingBottom: px(bottom),
      paddingLeft: px(left),
    };
  },
  margin: (up, right, bottom, left) => {
    return {
      marginUp: px(up),
      marginRight: px(right),
      marginBottom: px(bottom),
      marginLeft: px(left),
    };
  },
};
