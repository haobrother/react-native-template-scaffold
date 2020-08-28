/*
 * @作者: haobrother
 * @日期: 2020-08-28 17:02:28
 * @描述: redux store初始化
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-28 17:02:28
 */

import {createStore} from 'redux';
import reduxApp from './reducers';
const store = createStore(reduxApp);
export default store;
