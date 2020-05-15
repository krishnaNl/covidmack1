import {
    ACCESS_TOKEN_HEADER,
    CONTENT_TYPE_HEADER,
    ContentTypeHeader,
    LOGIN_URI,
} from './Constants';
import {Logger} from "../../../utils/Logger";

export class LocalApiServerApiInterceptor {

    request = (networkClient) => {
        const onFulfilled = async (config) => {
            // TODO: check network status
            config.headers = config.headers || {};
            config = this.addContentTypeHeader(config);
            config = await this.addAccessTokenHeader(config, networkClient);
            return config;
        };

        const onRejected = (requestConfig) => requestConfig;

        return {onFulfilled, onRejected};
    }

    response = (networkClient) => {
        const onFulfilled = (response) => response;

        const onRejected = async (error) => {
            // const originalRequest = error.config;
            /* const authHelper = networkClient.getAuthHelper();
             if (!authHelper) {
                 return Promise.reject(error);
             }

             /!*if (!this.isAccessTokenExpiredError(error)) {
                 return Promise.reject(error);
             }*!/

             if (!originalRequest._retry) {
                 // TODO: Uncomment this if the error is not reproducible
                 // tslint:disable-next-line:no-commented-out-code
                 /!*
                 await authHelper.refreshTokens();
                 originalRequest = await this.addAccessTokenHeader(originalRequest, networkClient);
                 originalRequest._retry = true;

                 return await networkClient.request(originalRequest);
                 *!/
             } */

            return Promise.reject(error);
        };

        return {onFulfilled, onRejected};
    }

    addContentTypeHeader = (config) => {
        const uri = config.url || '';
        // const method = config.method;
        // TODO: This needs to move to a function
        if (this.isLoginUri(uri)) {
            config.headers[CONTENT_TYPE_HEADER] = ContentTypeHeader.urlEncoded;
        }
        // Need to enable if we need application/json
        // else if (uri) {
        //     config.headers[CONTENT_TYPE_HEADER] = ContentTypeHeader.json;
        // }
        else {
            config.headers[CONTENT_TYPE_HEADER] = ContentTypeHeader.formData;
        }
        return config;
    }

    addAccessTokenHeader = async (config, networkClient) => {

        config.headers = config.headers || {};
        const uri = config.url || '';

        if (!this.isNoAccessToken(uri)) {
            const authHelper = networkClient.getAuthHelper();
            if (authHelper) {
                config.headers[ACCESS_TOKEN_HEADER] = `Bearer ${await authHelper.getAccessToken()}`;
            }
        }

        return config;
    }

    isLoginUri = (uri) => {
        return !!uri.includes('');
    }

    isNoAccessToken = (uri) => {
            return false;

    }

}
