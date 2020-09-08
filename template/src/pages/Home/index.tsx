/*
 * @作者: haobrother
 * @日期: 2020-08-27 16:12:45
 * @描述: 首页
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-27 16:12:45
 */

import React from 'react';
import {StyleSheet, View, Text, Button, StatusBar} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {nowtime} from 'utils/tools';
import {layout} from 'styles/common';
import {RootStackParamList, BottomTabParamList} from 'types';

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({navigation}: Props) => {
  return (
    // 所有页面需要用SafeAreaView包裹以适应iphoneX系列屏幕
    <SafeAreaView style={styles.container} edges={['right', 'top', 'left']}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <Text>Hello World!</Text>
        <Text>当前时间: {nowtime()}</Text>
        <Button title="详情页" onPress={() => navigation.navigate('Details')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...layout.flex.columnCenterBox,
  },
  body: {
    ...layout.flex.columnCenterBox,
  },
});

export default HomeScreen;
