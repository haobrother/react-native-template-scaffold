/*
 * @作者: haobrother
 * @日期: 2020-08-24 16:28:33
 * @描述: 持久化存储Async Storage封装
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-24 16:28:33
 */

// 关于Async Storage的使用方法参考: https://react-native-community.github.io/async-storage/docs/usage
import AsyncStorage from '@react-native-community/async-storage';

// Async Storage使用模版

/// 定义Async Storage存储项对应的索引key
const key1 = '@name1';
const key2 = '@name2';
const key3 = '@name3';

// 1. 添加新数据/修改数据
// value, 存储字符串
const storeData = async (value: string) => {
  try {
    await AsyncStorage.setItem(key1, value);
  } catch (e) {
    // saving error
  }
};

interface obj {
  name: string;
  value: number;
}
// value, 存储对象
const storeData2 = async (value: obj) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key2, jsonValue);
  } catch (e) {
    // saving error
  }
};

// 2. 获取数据
// 返回字符串
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(key1);
    if (value !== null) {
      // value previously stored
    }
    return value;
  } catch (e) {
    // error reading value
  }
};

// 返回对象
const getData2 = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(key2);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

// 3. 删除数据
const delData = async () => {
  try {
    await AsyncStorage.removeItem(key3);
  } catch (e) {
    // remove error
  }
};

export default {
  storeData,
  storeData2,
  getData,
  getData2,
  delData,
};
