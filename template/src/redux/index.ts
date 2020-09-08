/*
 * @作者: haobrother
 * @日期: 2020-08-28 17:02:28
 * @描述: redux store初始化
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-28 17:02:28
 */

// Typescript路径映射回导致'redux'包名与当前redux目录冲突,需要相对目录来应用解决
import {createStore} from '../../node_modules/redux';
import reduxApp from './reducers';
const store = createStore(reduxApp);
export default store;
