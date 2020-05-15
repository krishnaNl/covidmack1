import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import OverallCount from '../components/OverallCount'
import { ScrollView } from 'react-native-gesture-handler';
import List from '../components/List'
import Icon from 'react-native-vector-icons/Ionicons'

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home',
      };

    render(){
        return(
            <>
                <Icon name="md-add" />

              <OverallCount/>
               <List/>
               </>
        )
    }
};
export default HomeScreen;
