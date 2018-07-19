import { GET_CHARITY_LOADING, GET_CHARITY_NEWS } from '../actions/types';
import { GET_RELEVANT_LOADING, GET_RELEVANT_NEWS } from '../actions/types';
import { GET_PREGNANCY_LOADING, GET_PREGNANCY_NEWS } from '../actions/types';

import { NewsState } from '../../Types/News';


const initState: NewsState = {
    relevantNews: [],
    pregnancyNews: [],
    charityNews: [],

    loading: {
        relevantNews: false,
        pregnancyNews: false,
        charityNews: false,
    }
} 

export default function(state = initState, action: any) {

    switch(action.type) {

        
        case GET_RELEVANT_LOADING:
            return {
                ...state,
                loading: {
                    ...(state.loading),
                    relevantNews: true
                }
            };


        case GET_PREGNANCY_LOADING:
            return {
                ...state,
                loading: {
                    ...(state.loading),
                    pregnancyNews: true
                }
            };
        

        case GET_CHARITY_LOADING:
            return {
                ...state,
                loading: {
                    ...(state.loading),
                    charityNews: true
                },
            }
        

        case GET_RELEVANT_NEWS:
            return {
                ...state,
                relevantNews: action.payload,
                loading: {
                    ...(state.loading),
                    relevantNews: false,
                }
            };
        

        case GET_PREGNANCY_NEWS:
            return {
                ...state,
                pregnancyNews: action.payload,
                loading: {
                    ...(state.loading),
                    pregnancyNews: false,
                }
            };
        

        case GET_CHARITY_NEWS:
            return {
                ...state,
                charityNews: action.payload,
                loading: {
                    ...(state.loading),
                    charityNews: false,
                }
            };
        
        default:
            return state;
    }

}