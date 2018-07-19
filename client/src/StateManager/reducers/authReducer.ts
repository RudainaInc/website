import { SET_CURRENT_USER } from '../actions/types';
// import isEmpty from '../utils/is-empty'

const isEmpty = (value: any) =>
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);


const initState = {
    isAuthenticated: false,
    user: {}
}

export default (state = initState, action: any) => {
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