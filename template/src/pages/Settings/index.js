/*
 * @作者: haobrother
 * @日期: 2020-08-27 16:24:49
 * @描述: 设置页
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-27 16:24:49
 */
import React from 'react';
import {StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {layout} from '../../styles/common';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>设置页!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...layout.flex.columnCenterBox,
  },
});
