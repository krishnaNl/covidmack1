import React from 'react';

import { WebView } from 'react-native-webview';

class FAQScreen extends React.Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://www.cdc.gov/coronavirus/2019-ncov/hcp/faq.html' }}
                style={{ flex: 1 }}
            />
        )
    }
};
export default FAQScreen;