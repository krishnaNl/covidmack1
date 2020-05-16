import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card, CardItem, Right} from 'native-base';
import axios from 'axios'
class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          resp:[],
        
        };
      }
    componentDidMount() {

        axios.get('http://e4b2e5cc.ngrok.io/contacts/NLMASK-123')
        .then(function (response) {
          // handle success
          console.warn('res',response.data);
          this.setState({resp:response.data}) 
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      
        }
       
  render() {
    const Data = [
      {loc: 'Bangalore', time: 'May 16'},
      {loc: 'Bangalore', time: 'May 16'},
      {loc: 'Bangalore', time: 'May 16'},
    ];
    return (
      <View>
        {/* {docs.map((item, key) => { */}

        {Data.map((item,Key) => {
          return (
            <Card>
             
              <CardItem>
                <Text>{item.loc}</Text>
                <Right>
                  <Text>{item.time}</Text>
                </Right>
              </CardItem>
            </Card>
          );
        })}
        
      </View>
    );
  }
}
export default SettingsScreen;
