import axios from 'axios';

import { BENEFACTORS_LOADING, GET_BENEFACTORS, GET_ERRORS, GET_VOLUNTEERS, VOLUNTEERS_LOADING } from "./types";

export const getBenefactorUsers = () => (dispatch: any) =>  {
    dispatch(setBenefactorUsersLoading());
    axios
        .get('/api/admin/getBenefactorUsers')
        .then( (res: any)  => {
            dispatch({
                payload: res.data,
                type: GET_BENEFACTORS,
            });
        }).catch( (err: any) => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const setBenefactorUsersLoading = () => {
    return {
        type: BENEFACTORS_LOADING
    }
}

export const getVolunteerUsers = (userData: any, history: any) => (dispatch: any) =>  {
    dispatch(setVolunteerUsersLoading());
    axios
        .get('/api/admin/getVolunteerUsers')
        .then( (res: any)  => {
            dispatch({
                payload: res.data,
                type: GET_VOLUNTEERS,
            });
        }).catch( (err: any) => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const setVolunteerUsersLoading = () => {
    return {
        type: VOLUNTEERS_LOADING
    }
}