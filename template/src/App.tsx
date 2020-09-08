/*
 * @作者: haobrother
 * @日期: 2020-08-24 16:09:07
 * @描述: App首屏
 * @最后修改人:   haobrother
 * @最后修改日期: 2020-08-24 16:09:07
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import AppStore from './redux/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {IconFill, IconOutline} from '@ant-design/icons-react-native';
import {isIphoneX, isIphoneXR} from 'config/platform';
import {px, text} from 'utils/screen';

// 引入页面
import {RootStackParamList, BottomTabParamList} from 'types';
import HomeScreen from 'pages/Home/index';
import DetailsScreen from 'pages/Home/Details/index';
import SettingsScreen from 'pages/Settings/index';

// MainScreen是App进入后的主页面,使用一个常规的底部Tab显示
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const MainScreen = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color /*, size */}) => {
          let icon;
          let iconSize = 26;
          if (route.name === 'Home') {
            icon = focused ? (
              <IconFill name="home" size={iconSize} color={color} />
            ) : (
              <IconOutline name="home" size={iconSize} color={color} />
            );
          } else if (route.name === 'Settings') {
            icon = focused ? (
              <IconFill name="setting" size={iconSize} color={color} />
            ) : (
              <IconOutline name="setting" size={iconSize} color={color} />
            );
          }
          return icon;
        },
      })}
      // 底部Tab栏样式配置
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: styles.tabBar,
        labelStyle: styles.tabBarTxt,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: '首页'}}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{tabBarLabel: '设置'}}
      />
    </BottomTab.Navigator>
  );
};

// 利用Stack导航器将其他全屏页面放在与Main同一个栈内,例如下面的详情页会全屏显示(隐藏底部Tab)
const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={AppStore}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen
              name="Main"
              component={MainScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen name="Details" component={DetailsScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: isIphoneX() || isIphoneXR() ? px(160) : px(120),
    paddingBottom: isIphoneX() || isIphoneXR() ? px(50) : px(10),
  },
  tabBarTxt: {
    fontSize: text(26),
  },
});

export default App;
