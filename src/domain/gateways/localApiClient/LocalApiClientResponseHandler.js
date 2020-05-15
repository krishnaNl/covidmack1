import {NetworkClientError} from "../../../network/NetworkClientError";
import {Logger} from "../../../utils/Logger";


export class LocalApiClientResponseHandler {
    /*
      Note:
      1. No specific response envelope
      2. Can contain partial errors
        - TODO: log partial errors
        - Need sample response
     */
    success = (response) => {
        if (response.code === 0){
            return response.data;
        }
    };

    error =  (error) => {
        const apiError = error;
        const errorDetails = apiError ? apiError : undefined;
        const originalError = errorDetails ? errorDetails.original : undefined;
        if (!errorDetails || !originalError) {
            return error;
        }

        if (originalError) {
            const localApiError = originalError;
            const errorMessage = localApiError.message || errorDetails.message;

            const localApiClientErrorDetails = {
                statusCode: errorDetails.statusCode,
                message: errorMessage,
                description: errorDetails.description,
                errors: originalError,
                original: originalError,
                errorType: localApiError.type,
            };


            const hybrisClientError = new NetworkClientError(errorMessage, localApiClientErrorDetails);

            console.log(`Local API Client error:`, hybrisClientError.toString());
            return hybrisClientError;
        }

        return apiError;
    }
}
