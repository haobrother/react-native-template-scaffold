/*
 * @作者: haobrother
 * @日期: 2020-08-27 18:17:19
 * @描述: reducers
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-27 18:17:19
 */
import {SIGN_IN, SIGN_OUT} from './actions';

// state模版
// {
//   logined: false,
// }

let initialState = {
  logined: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      // 处理SIGN_IN action并返回新的state
      break;
    case SIGN_OUT:
      // 处理SIGN_OUT action并返回新的state
      break;
    default:
      return state;
  }
};
