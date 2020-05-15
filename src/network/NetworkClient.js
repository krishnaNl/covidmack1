import axios from 'axios';
import NetworkResponseHandler from './NetworkResponseHandler';
import {DEFAULT_API_TIMEOUT, HttpMethod} from './Constants';
import {StringUtils} from '../utils/StringUtils';

const createClient = (apiClient) => {
    const baseURL = apiClient.getBaseUrl();
    if (!StringUtils.isValidUrl(baseURL)) {
        throw new Error('Base url is not valid');
    }

    const axiosInstance = axios.create({
        baseURL,
    });

    // Add Request & Response Interceptors
    // see: https://interglobalmedia.gitbooks.io/react-notes/adding-interceptors-to-execute-code-globally.html?q=
    const apiInterceptor = apiClient.getInterceptor();
    if (apiInterceptor) {
        const requestInterceptor = apiInterceptor.request(apiClient);
        const responseInterceptor = apiInterceptor.response(apiClient);
        axiosInstance.interceptors.request.use(requestInterceptor.onFulfilled, requestInterceptor.onRejected);
        axiosInstance.interceptors.response.use(responseInterceptor.onFulfilled, responseInterceptor.onRejected);
    }

    return axiosInstance;
};

export class NetworkClient {
    baseUrl;

    requestTimeout;

    interceptor;

    responseHandler;

    defaultHandler;

    useDefaultHandler = true;

    authHelper;

    client;

    constructor(config) {
        this.baseUrl = config.baseUrl;
        this.requestTimeout = config.requestTimeout || DEFAULT_API_TIMEOUT;
        this.interceptor = config.interceptor || undefined;
        this.responseHandler = config.responseHandler || undefined;
        if (config.useDefaultHandler !== undefined) {
            this.useDefaultHandler = config.useDefaultHandler;
        }
        if (this.useDefaultHandler) {
            this.defaultHandler = new NetworkResponseHandler();
        }

        this.client = createClient(this);
    }

    request = (config) => {
        return this.client
            .request(config)
            .then((response) => {
                return Promise.resolve(this.handleSuccess(response));
            }, (error) => {
                return Promise.reject(this.handleError(error));
            });
    }

    handleSuccess = (apiResponse) => {
        let response = apiResponse;
        if (this.defaultHandler && this.defaultHandler.success) {
            response = this.defaultHandler.success(response);
        }

        if (this.responseHandler && this.responseHandler.success) {
            response = this.responseHandler.success(response);
        }

        return response;
    }

    handleError = (apiError) => {
        let error = apiError;
        if (this.defaultHandler && this.defaultHandler.error) {
            error = this.defaultHandler.error(error);
        }

        if (this.responseHandler && this.responseHandler.error) {
            error = this.responseHandler.error(error);
        }

        return error;
    }

    get = (url, params) => {
        return this.request({
            // @ts-ignore
            method: HttpMethod.GET,
            url,
            params,
        });
    }

    post = (url, data, params) => {
        return this.request({
            // @ts-ignore
            method: HttpMethod.POST,
            url,
            data,
            params,
        });
    }

    put = (url, data, params) => {
        return this.request({
            // @ts-ignore
            method: HttpMethod.PUT,
            url,
            data,
            params,
        });
    }

    patch = (url, data, params) => {
        return this.request({
            // @ts-ignore
            method: HttpMethod.PATCH,
            url,
            data,
            params,
        });
    }

    delete = (url, params) => {
        return this.request({
            // @ts-ignore
            method: HttpMethod.DELETE,
            url,
            params,
        });
    }

    getBaseUrl = () => {
        return this.baseUrl;
    }

    getRequestTimeout = () => {
        return this.requestTimeout;
    }

    getInterceptor = () => {
        return this.interceptor;
    }

    setAuthHelper = (authHelper) => {
        this.authHelper = authHelper;
    }

    getAuthHelper = ()=> {
        return this.authHelper;
    }
}
