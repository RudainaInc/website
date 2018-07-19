import axios from 'axios';

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

import * as jwt_decode from 'jwt-decode';

const setAuthToken = (token: any) => {
    if(token) {
        axios.defaults.headers.common.Autherization = token;
    } else {
        delete axios.defaults.headers.common.Autherization;
    }
} 

export const registerBenefactorUser = (userData: any, history: any) => (dispatch: any) =>  {
    axios
        .post('/api/users/registerBenefactor', userData)
        .then(res => history.push('/'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const registerVolunteerUser = (userData: any, history: any) => (dispatch: any) =>  {
    axios
        .post('/api/users/registerVolunteer', userData)
        .then(res => history.push('/'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}


export const loginUser = (userData: any) => (dispatch: any) => {
    axios
        .post('/api/users/login', userData)
        .then(res => {

            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));

        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const logoutUser = () => (dispatch: any) => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    return setCurrentUser({});
}


export const setCurrentUser = (decoded: any) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};