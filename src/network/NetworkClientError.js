export class NetworkClientError {

    details = {};
    message = '';
    constructor(m, details) {

        this.details = details;
        this.message = m;
    }

    toString() {
        const errorObject = {
            message: this.message,
            details: this.details,
        };

        return JSON.stringify(errorObject);
    }
}
