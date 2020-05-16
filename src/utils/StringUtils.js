import urlRegex from 'url-regex';
import {ObjectUtils} from './ObjectUtils';

export class StringUtils {

    /**
     * isValidUrl
     * */
    static isValidUrl = (url) => {
        return urlRegex({exact: true, strict: true}).test(url);
    };

    /**
     * serialize
     * */
    static serialize = (data) => {
        if (ObjectUtils.isOfType('array', data) || ObjectUtils.isOfType('object', data)) {
            return JSON.stringify(data);
        }

        return data;
    };

    /**
     * isEmpty
     * */
    static isEmpty = (value) => {
        if(value !== null){
            return value.length > 0;
        }
        return false;
    };

    /**
     * validateEmail
     * */
    static validateEmail = (value) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    }
}
