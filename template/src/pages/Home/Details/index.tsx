/*
 * @作者: haobrother
 * @日期: 2020-08-28 17:27:24
 * @描述: 详情页
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-28 17:27:24
 */
import React from 'react';
import {StyleSheet, Text, StatusBar} from 'react-native';
import {layout} from 'styles/common'; // 路径解析问题,不能放在最后一行
import {SafeAreaView} from 'react-native-safe-area-context';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>详情页!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...layout.flex.columnCenterBox,
  },
});

export default DetailsScreen;
