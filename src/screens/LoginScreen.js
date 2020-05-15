import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button,StyleSheet, Alert, ImageBackground } from 'react-native';
// import OTPInput from 'react-native-otp';
import Modal from 'react-native-modal';
// import { isLoggedIn } from '../../services/Async';
// import { postDataMethod } from '../../services/AppServices';
// import { URLs } from '../../services/Endpoint';
// import styles from '../../style';
// import * as constants from '../../constants/index' 
import OtpInputs from "react-native-otp-inputs";

class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalVisible: true,
			showMe: false,
			otp: '',
			phone: '',
			open: true,
			disabled: true,
		};
	}

	/**
	 * Function that sends a phone number and navigates to enter OTP modal
	 */
	sendNumber = () => {

		// postDataMethod(URLs.baseURL + URLs.loginnumber, {
		// 	phone: '+91' + this.state.phone,
		// }).then((res) => {
		// 	this.setState({ isModalVisible: false, showMe: true, disabled: false });
		// });
		// .catch((e) => {
		// 	if (e.response.data === 'Number Not Registered') {
		// 		this.setState({ spinner: false });

		// 		Alert.alert('Please enter registered number');
		// 	}
		// });
	};
	/**
	 * Function that sends an OTP and navigates to Dashboard
	 */ sendOTP = () => {
		// postDataMethod(URLs.baseURL + URLs.loginotp, {
		// 	phone: '+91' + this.state.phone,
		// 	otp: this.state.otp,
		// 	fcm: this.props.fcmTok,
		// })
		// 	.then((response) => {
		// 		// let tokens = response.data.token;
		// 		// isLoggedIn('true');
		// 		this.props.navigate('Dashboard');
		// 	})
		// 	.catch((e) => {
		// 		if (e.response.data === 'Invalid Otp') {
		// 			Alert.alert('Please enter Valid OTP');
		// 		} else {
		// 		}
		// 	});
	};

	render() {
		return (
			<ImageBackground source={require('../utils/download.jpeg')} style={styles.background}>
				<View style={styles.container}>
					<Modal
						isVisible={this.state.isModalVisible}
                        closeOnTouchOutside={false}
                        // onBackdropPress={() => this.setState({isModalVisible: false})}

						disableOnBackPress={true}
						modalStyle={styles.modStyle}
					>
						<View style={{ justifyContent: 'center', alignContent: 'center' }}>
							<Text style={styles.text}>Mobile Number</Text>

							<TextInput
								id="mobile"
								style={styles.input}
								maxLength={10}
								textContentType="telephoneNumber"
								keyboardType="phone-pad"
								underlineColorAndroid="transparent"
								placeholder="Enter mobile number"
								onChangeText={(phone) => this.setState({ phone })}
							/>

							{/* {this.state.phone.length === 10 ? ( */}
							<View style={styles.button}>
								<Button
									style={{ float: 'center' }}
									id="send-num"
									// onPress={()=> this.setState({ isModalVisible:false,showMe:true })  }
									onPress={() => this.sendNumber()}
									title="Generate OTP"
									color="#01A5DE"
									disabled={this.state.phone.length != 10}
								/>
							</View>
						</View>
					</Modal>

					<Modal
						isVisible={this.state.showMe}
                        closeOnTouchOutside={true}
                        onBackdropPress={() => this.setState({isVisible: false})}
						// disableOnBackPress={true}
						modalStyle={styles.otpModal}
					>
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<Text style={styles.text}>OTP</Text>

							<OtpInputs
								id="otp"
								value={this.state.otp}
								onChange={(otp) => this.setState({ otp })}
								tintColor="#FB6C6A"
								offTintColor="#BBBCBE"
								otpLength={4}
							/>
							<View style={styles.button}>
								<Button
									style={{ float: 'center' }}
									id="send-otp"
									// onPress={()=>this.props.navigation.navigate('Dashboard')}
									margin="10"
									onPress={() => this.sendOTP()}
									title="Submit"
									color="#01A5DE"
									disabled={this.state.otp.length != 4}
								/>
							</View>

							<TouchableOpacity
								id="back"
								onPress={() =>
									this.setState({ isModalVisible: true, otp: '', phone: '', showMe: false })
								}
							>
								<Text style={styles.backTouchable}>Back</Text>
							</TouchableOpacity>
						</View>
					</Modal>
				</View>
			 </ImageBackground>
		);
	}
}

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      width: '100%',
      height: '100%',
    },
    modStyle: {
      borderRadius: 2,
      margin: 20,
      padding: 10,
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: 'notoserif',
      textAlign: 'center',
    },
  
    button: {
      width: '50%',
      margin: 10,
      marginLeft: 90,
      marginRight: 90,
    },
    otpModal: {
      borderRadius: 2,
      margin: 20,
      padding: 10,
    },
  
    backTouchable: {
      fontSize: 15,
      textAlign: 'center',
    },
    input: {
      margin: 15,
      height: 40,
      borderColor: '#1F2398',
      borderWidth: 1,
    },
})