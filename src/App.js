import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import Navigation from './navigation';
import { NavigationService } from './services/NavigationService';

import store from './modules/store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Navigation
                        ref={navigatorRef => {
                            NavigationService.setTopLevelNavigator(navigatorRef);
                        }} />
                </View>
            </Provider>
        )
    }
};
export default App;