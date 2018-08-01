import { LANG_CHANGE } from '../actions/types';

const initState = "en";

export default function(state = initState, action: any) {

    switch(action.type) {
        
        case LANG_CHANGE:
            return action.payload; 
        
        default:
            return state;
    }
}