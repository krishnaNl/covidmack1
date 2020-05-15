import React from 'react';

import { WebView } from 'react-native-webview';

class NewsScreen extends React.Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://www.bing.com/covid/local/india' }}
                style={{ flex: 1 }}
            />
        )
    }
};
export default NewsScreen;