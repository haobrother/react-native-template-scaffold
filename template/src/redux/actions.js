/*
 * @作者: haobrother
 * @日期: 2020-08-27 18:17:16
 * @描述: actions
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-27 18:17:16
 */

// action类型
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

// action创建者
export function signIn(params) {
  return {type: SIGN_IN, params};
}

export function signOut() {
  return {type: SIGN_OUT};
}
