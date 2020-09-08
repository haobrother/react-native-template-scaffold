/*
 * @作者: haobrother
 * @日期: 2020-08-27 18:17:16
 * @描述: actions
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-27 18:17:16
 */

import {SignInState, SIGN_IN, SIGN_OUT, SignActionTypes} from 'types';

// action创建者

export function signIn(params: SignInState): SignActionTypes {
  return {type: SIGN_IN, params};
}

export function signOut(): SignActionTypes {
  return {type: SIGN_OUT};
}
