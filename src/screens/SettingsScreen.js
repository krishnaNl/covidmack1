import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Form, Input, Label, Item} from 'native-base';

const styles = StyleSheet.create({
  textAlignstyle: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center'
  },
});

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userAge: '',
      userGender: '',
      userEmailId: '',
      userAddress: '',
      userState: '',
      userNationality: '',
    };
  }

  setFormValues(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.textAlignstyle}>Enter Details</Text>
        <Form>
          <Item inlineLabel>
            <Label>Name</Label>
            <Input onChangeText={e => this.setFormValues(e.target.name)} />
          </Item>
          <Item inlineLabel>
            <Label>Age</Label>
            <Input />
          </Item>
          <Item inlineLabel>
            <Label>Email id</Label>
            <Input />
          </Item>
          <Item inlineLabel>
            <Label>Address</Label>
            <Input />
          </Item>
          <Item inlineLabel>
            <Label>Phone Number</Label>
            <Input />
          </Item>
          <Item inlineLabel>
            <Label>State</Label>
            <Input />
          </Item>
          <Item inlineLabel last>
            <Label>Nationality</Label>
            <Input />
          </Item>
        </Form>
      </View>
    );
  }
}
export default SettingsScreen;
