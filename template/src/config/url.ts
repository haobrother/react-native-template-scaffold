/*
 * @作者: haobrother
 * @日期: 2020-08-24 16:53:09
 * @描述: URL定义(根据项目的不同来指定)
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-24 16:53:09
 */

import Version from './version';

const baseUrl = 'https://';

export default {
  APP_URL: baseUrl + '/xxx/v' + Version.API_VERSION,
};
