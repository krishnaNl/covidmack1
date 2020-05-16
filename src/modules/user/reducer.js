import { USER_LOGGED_IN } from '../../utils/ActionTypes';

const initialState = {
    text: '',
};

const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case USER_LOGGED_IN:
            return { ...state, text: action.payload.data }

        default:
            return state;
    }

}

export default userReducer
