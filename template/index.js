/*
 * @作者: haobrother
 * @日期: 2020-08-24 16:10:00
 * @描述: App程序入口
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-24 16:10:00
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
