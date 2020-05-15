import {LocalApiClient} from "../gateways/localApiClient/LocalApiClient";
import {NetworkUtils} from "../../utils/NetworkUtils";

const ENDPOINTS = {
    oauthToken: () => `/auth/token`,
};

class UserRepository {
    apiClient;

    endPoints = ENDPOINTS;

    constructor(apiClient) {
        this.apiClient = apiClient;
    }

     getApiClient = () => {
        return this.apiClient;
    }

    login = async (request) => {
        return await this.apiClient.post(ENDPOINTS.oauthToken(), NetworkUtils.urlEncode(request.data));
    }
}

const  userRepository = new UserRepository(LocalApiClient);

export {userRepository as UserRepository};
