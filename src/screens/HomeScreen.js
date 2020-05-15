import React from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home',
      };

    render(){
        return(
            <View>
                <Text>HomeScreen</Text>
            </View>
        )
    }
};
export default HomeScreen;