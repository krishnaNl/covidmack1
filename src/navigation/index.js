import SplashScreen from '../screens/SplashScreen';
import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createStackNavigator,
} from 'react-navigation';
import RouteNames from './Routes';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const DrawerNavigator = createDrawerNavigator(
  {
    [RouteNames.home]: HomeScreen,
    [RouteNames.settings]: SettingsScreen,
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
