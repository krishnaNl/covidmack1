/* eslint-disable import/no-cycle */
import {NetworkClient} from "../../../network/NetworkClient";
import {LocalApiClientResponseHandler} from "./LocalApiClientResponseHandler";
import {LocalApiServerApiInterceptor} from "./LocalApiServerApiInterceptor";


//const baseUrl = 'https://api-rxcillin.fyndus.com/';
const baseUrl = 'http://localhost:3002';
//const baseUrl = 'http://192.168.225.71:3002';
// Request timeout in milliseconds
const requestTimeout = 10000;
const responseHandler = new LocalApiClientResponseHandler();
const interceptor = new LocalApiServerApiInterceptor();

const localApiClient = new NetworkClient({
    baseUrl,
    requestTimeout,
    responseHandler,
    interceptor,
    useDefaultHandler: true,
});


export { localApiClient as LocalApiClient };
