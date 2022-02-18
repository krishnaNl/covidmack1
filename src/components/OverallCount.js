import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

class OverallCount extends React.Component {

    // static navigationOptions = {
    //     title: 'Home',
    //   };

    render(){
        return(
            <View style={styles.count}>
              <View style={styles.box}>
              <Text style={styles.titleConfirmed}>Confirmed</Text>
              <Text style={styles.countConfirmed}>81,997</Text>
              </View>
              <View style={styles.box}>
              <Text style={styles.titleActive}>Active</Text>
              <Text style={styles.countActive}>51,374</Text>
              </View>
              <View style={styles.box}>
              <Text style={styles.titleRecovered}>Recovered</Text>
              <Text style={styles.countRecovered}>27,969</Text>
              </View>
              <View style={styles.box}>
              <Text style={styles.titleDeceased}>Deceased</Text>
              <Text style={styles.countDeceased}>2,649</Text>
              </View>

            </View>
            
            
        )
    }
};
export default OverallCount;
const styles = StyleSheet.create({
    count: {
      paddingTop: 240,
      // paddingHorizontal: 32,
    //   backgroundColor: Colors.lighter,
      flex:1,
      flexDirection:'row',
      justifyContent: 'space-between',
      position: 'absolute',

    },
    box:{
  // backgroundColor:'red',
  width:100,
  // height:100
    },
    titleConfirmed:{
      color:'red',
      textAlign:'center',
      fontSize:16
        },
        countConfirmed:{
          color:'red',
          textAlign:'center',
          fontSize:20
            },
        titleActive:{
          color:'blue',
          textAlign:'center',
          fontSize:16
            },
            countActive:{
              color:'blue',
              textAlign:'center',
              fontSize:20
                },
            titleRecovered:{
              color:'green',
              textAlign:'center',
              fontSize:16
                },
                countRecovered:{
                  color:'green',
                  textAlign:'center',
                  fontSize:20
                    },
                titleDeceased:{
                  color:'black',
                  textAlign:'center',
                  fontSize:16
                    },
                    countDeceased:{
                      color:'black',
                      textAlign:'center',
                      fontSize:20
                        },
  
  });