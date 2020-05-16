import {NetworkClientError} from './NetworkClientError';
import {DEFAULT_ERROR_MESSAGE, HttpStatusCode, NO_INTERNET_ERROR_MESSAGE} from './Constants';
import {Logger} from '../utils/Logger';
import {ObjectUtils} from '../utils/ObjectUtils';

export default class NetworkResponseHandler {
    success = (response) => {
        const responseBody = response.data;
        if (!responseBody) {
            if (HttpStatusCode.NoContent !== response.status) {
                Logger.warn(`Empty response body. Response: ${response}`);
            }

            return {};
        }

        if (!this.isJsonResponse(response)) {
            Logger.warn(`Response is not a JSON. ${responseBody}`);
        }

        return responseBody;
    }

    error = (error) => {
        Logger.warn(`API error. Content: ${JSON.stringify(error)}`);

        let errorDetails = {
            message: DEFAULT_ERROR_MESSAGE,
        };

        const errorResponse = error.response;
        if (!errorResponse) {
            Logger.warn(`No response in error. Error: ${JSON.stringify(error)}`);
            return new NetworkClientError(NO_INTERNET_ERROR_MESSAGE, errorDetails);
        }

        if (!this.isJsonResponse(errorResponse)) {
            Logger.warn(`Response is not a JSON. Response content: ${JSON.stringify(errorResponse)}`);
        }

        errorDetails = {
            statusCode: errorResponse.status,
            message: errorDetails.message,
            description: errorResponse.data ? JSON.stringify(errorResponse.data) : '',
            errors: errorDetails.errors || [],
            original: errorResponse.data,
        };

        Logger.warn(`NetworkResponseHandler errorDetails`, errorDetails);
        return errorDetails;
    }

    isJsonResponse = (response) => {
        const headers = response.headers || {};
        const responseBody = response.data || '';
        const contentType = headers['content-type'] || '';
        if (contentType.indexOf('application/json') > -1 &&
            (ObjectUtils.isOfType('array', responseBody) || ObjectUtils.isOfType('object', responseBody))) {
            return true;
        }

        return false;
    }
}
