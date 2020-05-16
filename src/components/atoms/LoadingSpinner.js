import React from 'react';
import {
  ActivityIndicator,
  StyleSheet, TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { PlatformUtils } from '../../utils/PlatformUtils';
import theme from '../../styles/theme';


class LoadingSpinner extends React.PureComponent {

   static defaultProps = {
    visible: false,
    message: 'Please Wait..',
  };

   render() {
    return this.renderSpinner();
  }

   renderSpinner() {
    const {visible, size, text} = this.props;
    if (!visible) {
      return null;
    }

    return (
      <TouchableOpacity style={styles.container} key={`spinner_${Date.now()}`} disabled={true}>
        <View style={styles.background}>
          <View style={styles.contentContainer}>
            <ActivityIndicator color={theme.colors.black} size={size ? size : 'small'}/>
            {text &&
              <Text>{text}</Text>
            }
            {PlatformUtils.isAndroid() &&
            <Text style={styles.textStyle}>
              {'Please Wait...'}
            </Text>
            }
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default LoadingSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: theme.colors.snow,
    padding: 20,
    borderRadius: PlatformUtils.isAndroid() ? 0 : 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: theme.colors.black,
    marginHorizontal: 12,
  },
});
