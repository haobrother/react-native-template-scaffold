/*
 * @作者: haobrother
 * @日期: 2020-08-27 18:17:19
 * @描述: reducers
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-27 18:17:19
 */
import {SignInState, SIGN_IN, SIGN_OUT, SignActionTypes} from 'types';

// state模版
// {
//   logined: false,
// }

// 初始化state,根据state扩展的情况来修改此类型
let initialState: SignInState = {
  logined: false,
};

export default (state = initialState, action: SignActionTypes): SignInState => {
  switch (action.type) {
    case SIGN_IN:
      // 处理SIGN_IN action并返回新的state
      return {
        ...state,
        // 添加新属性/修改旧有属性
      };
    case SIGN_OUT:
      // 处理SIGN_OUT action并返回新的state
      return {
        ...state,
        // 添加新属性/修改旧有属性
      };
    default:
      return state;
  }
};
