import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import StateList from './StateList'
class List extends React.Component {

    // static navigationOptions = {
    //     title: 'Home',
    //   };

    render(){
        return(
            <>
            {/* <View style={styles.count}>
            <View style={styles.box}>
                 <Text style={styles.titleConfirmed}>Confirmed</Text>
                 </View>
                 <View style={styles.box}>
                 <Text style={styles.titleActive}>Active</Text>
                 </View>
                 <View style={styles.box}>
                 <Text style={styles.titleRecovered}>Recovered</Text>
                 </View>
                 <View style={styles.box}>
                 <Text style={styles.titleDeceased}>Deceased</Text>
                 </View>
   
               </View> */}
           <StateList/>
           </>
        )
    }
};
export default List;
const styles = StyleSheet.create({
    count: {
        // padding: 200,
        // paddingHorizontal: 32,
      //   backgroundColor: Colors.lighter,
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        position: 'absolute',

      },
  
  });