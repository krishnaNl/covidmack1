import { USER_LOGGED_IN } from '../../utils/ActionTypes';

export const dummyAction = (data) => {
    return {
        types: USER_LOGGED_IN,
        payload: {
            data
        }
    }
}
