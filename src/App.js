import React from 'react';
import { View } from 'react-native';
import Navigation from './navigation';
import { NavigationService } from './services/NavigationService';
class App extends React.Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <Navigation
                ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
            </View>
        )
    }
};
export default App;