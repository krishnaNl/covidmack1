import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import {NavigationActions} from 'react-navigation';

import RouteNames from '../navigation/Routes';

class SideMenuScreen extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen(RouteNames.login)}>
              Login
            </Text>
          <View>
            <Text style={styles.sectionHeadingStyle}>USER</Text>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(RouteNames.home)}>
                Home
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(RouteNames.settings)}>
                Settings
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>COVID</Text>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(RouteNames.news)}>
                News
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(RouteNames.faq)}>
                FAQs
              </Text>
            </View>
          </View>
        </ScrollView>
        {/*<View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  navItemStyle: {
    padding: 15,
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey',
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey',
  },
});

SideMenuScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SideMenuScreen;
