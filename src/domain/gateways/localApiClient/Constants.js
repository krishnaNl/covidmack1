export const X_WWW_FORM_URLENCODED_ROUTES = [
    '/in/oauth/token',
];
export const DEFAULT_HYBRIS_ERROR_MESSAGE = 'Something went wrong. Please try again';
export const LOGIN_URI = '/auth/token';

// Headers
export const ACCESS_TOKEN_HEADER = 'Authorization';
export const TRACE_ID_HEADER = 'X-Trace-ID';
export const CONTENT_TYPE_HEADER = 'Content-Type';
export const ContentTypeHeader = {
    urlEncoded: 'application/x-www-form-urlencoded',
    json: 'application/json',
    formData: 'multipart/form-data',
};

export const GrantTypes = {
    clientCredentials: 'client_credentials',
    refreshToken: 'refresh_token',
    // tslint:disable-next-line:no-hardcoded-credentials [false-positive]
    password: 'password',
};

export const UserTypes = {
    pharmacy: 'RX',
    wholesaler: 'WS',
    hospital: 'HOS',
    admin:'ADMIN'
};

export const LocalApiClientMessage = {
    loginSuccess: 'login Success'
};

//PRODUCTION
/* export const PaymentAuth = {
    clientKey: '5D7fN464eZcawG3eKHX6Cq8UVpb89rgEBwV55c47m975TcBLbZMGcLSwN69x9xsn',
    apiLoginID: '5zCgU9M3r'
}; */

//SANDBOX
export const PaymentAuth = {
    clientKey: '86batbTyAHHxZyh5x726mF6Pg8E7D5Pfa8n8fE6NT9YP2c6HtkRPS3WbCAjVGt58',
    apiLoginID: '49Q8znr2Rsj'
};