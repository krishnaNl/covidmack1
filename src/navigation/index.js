import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import SplashScreen from '../screens/SplashScreen';
import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createStackNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import RouteNames from './Routes';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen'
import NewsScreen from '../screens/NewsScreen';
import FAQScreen from '../screens/FAQScreen';

import SideMenuScreen from '../screens/SidemenuScreen';

const DrawerNavigator = createDrawerNavigator(
  {
    [RouteNames.home]: HomeScreen,
    [RouteNames.settings]: SettingsScreen,
    [RouteNames.login]: LoginScreen,
    [RouteNames.faq]: FAQScreen,
    [RouteNames.news]: NewsScreen,
  },
  {
    initialRouteName: RouteNames.home,
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
    navigationOptions: ({navigation}) => ({
      headerLeft: (
        <TouchableOpacity
          style={{paddingHorizontal: 10}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="bars" size={30} color="#6b52ae" />
        </TouchableOpacity>
      ),
    }),
    contentComponent: SideMenuScreen,
  },
);

const AppStackNavigator = createStackNavigator({
  [RouteNames.appStack]: DrawerNavigator,

});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      [RouteNames.splash]: SplashScreen,
      [RouteNames.app]: AppStackNavigator,
    },
    {
      initialRouteName: RouteNames.splash,
    },
  ),
);

export default AppContainer;
