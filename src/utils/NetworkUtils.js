import {StringUtils} from "./StringUtils";

export class NetworkUtils {
    static urlEncode = (data) => {
        return Object.entries(data)
            .map(([key, val]) => `${key}=${encodeURIComponent(StringUtils.serialize(val))}`)
            .join('&');
    }
}
