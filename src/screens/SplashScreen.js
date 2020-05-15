import React from 'react';
import { View, Text } from 'react-native';
import { NavigationService } from '../services/NavigationService';
import RouteNames from '../navigation/Routes';
import LoadingSpinner from '../components/atoms/LoadingSpinner';

class SplashScreen extends React.Component {


    componentDidMount(){
        setTimeout(()=>{
            NavigationService.navigationToScreen(RouteNames.home)
        }, 1000)
    }

    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <LoadingSpinner visible={true}/>
            </View>
        )
    }
};
export default SplashScreen;