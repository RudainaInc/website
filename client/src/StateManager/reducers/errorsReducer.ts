import { GET_ERRORS } from "../actions/types";;

const initState = {}

export default (state = initState, action: any) => {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload
        default:
            return state;
    }
}