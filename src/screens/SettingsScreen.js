import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card, CardItem, Right} from 'native-base';
import axios from 'axios';
class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resp: [],
    };
  }
  componentDidMount = () => {
    try {
      const data = axios.get('http://6c504155.ngrok.io/contacts/NLMASK-123');
      console.warn('res', data);
      this.setState({resp: data.data});
    } catch (e) {
      //
    }
  };

  render() {
    console.log('this.state.resp', this.state.resp);
    return (
      <View style={{flex: 1}}>
        {/* {docs.map((item, key) => { */}

        {this.state.resp ? (
          this.state.resp.map((item, Key) => {
            return (
              <Card>
                <CardItem>
                  <Text>{item.contactDeviceId}</Text>
                  <Text>{item.latitude}</Text>
                  <Text>{item.longitude}</Text>
                  <Right>
                    <Text>{item.timestamp}</Text>
                  </Right>
                </CardItem>
              </Card>
            );
          })
        ) : (
          <View style={{alignItem: 'center', justifyContent: 'center'}}>
            <Text>{'No Data'}</Text>
          </View>
        )}
      </View>
    );
  }
}
export default SettingsScreen;
