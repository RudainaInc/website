import { BENEFACTORS_LOADING, GET_BENEFACTORS, GET_VOLUNTEERS, VOLUNTEERS_LOADING } from '../actions/types';

import { AdminState } from '../../Types/admin';


const initState: AdminState = {
    benefactors: [],
    volunteers: [],

    loading: {
        benefactors: false,
        volunteers: false,
    }
} 

export default function(state = initState, action: any) {

    switch(action.type) {

        case BENEFACTORS_LOADING:
            return {
                ...state,
                loading: {
                    ...(state.loading),
                    benefactors: true
                }
                
            };

        case GET_BENEFACTORS:
            return {
                ...state,
                benefactors: action.payload,
                loading: {
                    ...(state.loading),
                    benefactors: false
                }
            };

        case VOLUNTEERS_LOADING:
            return {
                ...state,
                loading: {
                    ...(state.loading),
                    volunteers: true
                }
            };
        
        case GET_VOLUNTEERS:
            return {
                ...state,
                volunteers: action.payload,
                loading: {
                    ...(state.loading),
                    volunteers: false
                }
            };
        
        default:
            return {
                ...state,
            };
    }
}