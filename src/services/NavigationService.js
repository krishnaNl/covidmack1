import {NavigationActions, StackActions} from 'react-navigation';

let navigator;

// TODO: need to add props params type
class NavigationService {
  static instance = null;

   onNavigationStateChange = (prevState, currentState) => {
  }

   setTopLevelNavigator = (navigatorRef) => {
    navigator = navigatorRef;
  }

  get navigation() {
    return navigator;
  }

   navigationToScreen(routeName, params = {}) {
    if (navigator) {
      navigator.dispatch(
        NavigationActions.navigate({
          routeName,
          params,
        }),
      );
    }
  }

  // TODO: Do we need to accept navigation as a parameter?
   goBack(navigation) {
    if (navigator) {
      navigator.dispatch(NavigationActions.back());
    }
  }

   getCurrentScreen = () => {
    const nav = this.navigation.state.nav;
    return this.getCurrentRoute(nav);
  }

   resetAppStack = () => {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({routeName: RouteNames.appStack})],
    });
    navigator.dispatch(resetAction);
  }
}

const navigationService = new NavigationService();
export {navigationService as NavigationService};
