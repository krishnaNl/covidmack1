import React from 'react';
import {PlatformUtils} from '../utils/PlatformUtils';
import { WebView } from 'react-native-webview';

const runFirst = `
            javascript: (function() {

            if (document.getElementsByClassName('header-wrapper').length > 0) {
                document.getElementsByClassName('header-wrapper')[0].remove();
              }

            if (document.getElementsByClassName('site-title').length > 0) {
                document.getElementsByClassName('site-title')[0].remove();
              }

            
              if (document.getElementsByClassName('leftnav-wrapper').length > 0) {
                document.getElementsByClassName('leftnav-wrapper')[0].remove();
              }
            
              if (document.getElementsByClassName('last-reviewed-row').length > 0) {
                document.getElementsByClassName('last-reviewed-row')[0].remove();
              }

        
              
              
            if (document.getElementsByTagName('nav').length > 0) {
              document.getElementsByTagName('nav')[0].remove();
            }
            if (document.getElementsByTagName('footer').length > 0) {
              document.getElementsByTagName('footer')[0].remove();
            }
            

            // remove active class from all elements
            document.querySelectorAll('[role="navigation"]').forEach(function (el){
            el.classList.remove("active");
            });

            })()
            true; // note: this is required, or you'll sometimes get silent failures
      `;

class FAQScreen extends React.Component {

     onNavigationStateChange = (events) => {
        this.webview.injectJavaScript(runFirst);
        return true;
      }

    render() {

        return (
            <WebView
                source={{ uri: 'https://www.cdc.gov/coronavirus/2019-ncov/hcp/faq.html' }}
                style={{ flex: 1 }}
                thirdPartyCookiesEnabled={true}
                androidHardwareAccelerationDisabled={true}
                domStorageEnabled={true}
                javaScriptEnabled={true}
                originWhitelist={['*']}
                scalesPageToFit={true}
                startInLoadingState={true}
                ref={(el) => this.webview = el}
                onNavigationStateChange={this.onNavigationStateChange}
                injectJavaScript={runFirst}
                onShouldStartLoadWithRequest={PlatformUtils.isIOS() ? this.onShouldStartLoadWithRequest : undefined}
                onLoadStart={PlatformUtils.isAndroid() ? this.onLoadStart : undefined}

            />
        )
    }
};
export default FAQScreen;
