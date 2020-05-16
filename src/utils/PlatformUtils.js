import { Platform } from 'react-native';

const isAndroid = () => {
  return Platform.OS === 'android';
};

const isIOS = () => {
  return Platform.OS === 'ios';
};

export const PlatformUtils = {
  isAndroid,
  isIOS,
};
