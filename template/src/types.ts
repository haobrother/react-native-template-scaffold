/*
 * @作者: haobrother
 * @日期: 2020-09-08 10:05:11
 * @描述: 类型定义
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-09-08 10:05:11
 */

///////////// 导航相关类型

export type RootStackParamList = {
  Main: undefined;
  Details: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Settings: undefined;
  // 虽然不在底部Tab导航,但是可以导航到根导航的页面
  // Details: undefined;
};

///////////// Redux Action相关类型

// action类型
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

// state 参数
export interface SignInState {
  logined: boolean;
}

interface SignInAction {
  type: typeof SIGN_IN;
  params: SignInState;
}

interface SignOutAction {
  type: typeof SIGN_OUT;
}

export type SignActionTypes = SignInAction | SignOutAction;
