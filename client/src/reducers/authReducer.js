import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../utils/is-empty'

const initState = {
    isAuthenticated: false,
    user: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}