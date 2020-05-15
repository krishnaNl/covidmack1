import {UserRepository} from '../../repositories/UserRepository';
import {LocalStorageService} from "../../../service/LocalStorageService";
import {Logger} from "../../../utils/Logger";

class LocalApiClientAuthenticationService {
    userRepository;

    tokens = {
        accessToken: undefined,
        refreshToken: undefined,
    };

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    loginUser = async (request) => {
        return await UserRepository.login(request);
    }

    adminLogin = async (request) => {
        return await UserRepository.adminLogin(request);
    }

    getTokens = async () => {
        const tokens = await LocalStorageService.getItem(LocalStorageService.USER_SESSION);
        if (tokens) {
            this.tokens = {
                accessToken: tokens.access_token,
                refreshToken: tokens.refresh_token,
            };
        }
        return tokens;
    }

    getAccessToken = async () => {

        if (this.tokens.accessToken) {
            return Promise.resolve(this.tokens.accessToken);
        }

        const userToken = await this.getTokens();

        return userToken ? userToken.access_token : '';
    }
}

const authenticationService = new LocalApiClientAuthenticationService(UserRepository);
// set auth helper for LocalApiClient
UserRepository.getApiClient().setAuthHelper(authenticationService);
export {authenticationService as LocalApiClientAuthenticationService};
