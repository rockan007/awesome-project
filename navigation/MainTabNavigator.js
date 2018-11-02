import React from 'react';
import {
  Platform
} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StudyScreen from '../screens/StudyScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: '主页',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ?
      `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'
    }
    />
  ),
};

const StudyStack = createStackNavigator({
  Studys: StudyScreen
})

StudyStack.navigationOptions = {
    tabBarLabel: '学习',
    tabBarIcon: ({
      focused
    }) => ( < TabBarIcon focused = {
        focused
      }
      name = {
        Platform.OS === 'ios' ? `ios-alarm${focused?'':'-outline'}` : 'md-alarm'
      }
      />)
    }

    const LinksStack = createStackNavigator({
      Links: LinksScreen,
    });

    LinksStack.navigationOptions = {
      tabBarLabel: '链接',
      tabBarIcon: ({
        focused
      }) => ( <
        TabBarIcon focused = {
          focused
        }
        name = {
          Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'
        }
        />
      ),
    };

    const SettingsStack = createStackNavigator({
      Settings: SettingsScreen,
    });

    SettingsStack.navigationOptions = {
      tabBarLabel: '设置',
      tabBarIcon: ({
        focused
      }) => ( <
        TabBarIcon focused = {
          focused
        }
        name = {
          Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'
        }
        />
      ),
    };

    export default createBottomTabNavigator({
      HomeStack,
      StudyStack,
      LinksStack,
      SettingsStack,
    });