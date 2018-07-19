import axios from 'axios';

import { GET_ERRORS } from './types';
import { GET_CHARITY_LOADING, GET_CHARITY_NEWS } from './types';
import { GET_PREGNANCY_LOADING, GET_PREGNANCY_NEWS } from './types';
import { GET_RELEVANT_LOADING, GET_RELEVANT_NEWS } from './types';


export const setRelevantNewsLoading = () => {
    return {
        type: GET_RELEVANT_LOADING
    }
}

export const getRelevantNews = () => (dispatch: any) => {
    dispatch(setRelevantNewsLoading());
    axios.get('/api/news/getRelevantNews')
    .then( (res: any)  => {
        dispatch({
            payload: res.data,
            type: GET_RELEVANT_NEWS,
        });
    }).catch( (err: any) => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
        })
    });
}

export const setPregnancyNewsLoading = () => {
    return {
        type: GET_PREGNANCY_LOADING
    }
}

export const getPregnancyNews = () => (dispatch: any) => {
    dispatch(setPregnancyNewsLoading());
    axios.get('/api/news/getPregnancyNews')
    .then( (res: any)  => {
        dispatch({
            payload: res.data,
            type: GET_PREGNANCY_NEWS,
        });
    }).catch( (err: any) => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
        })
    });
}

export const setCharityNewsLoading = () => {
    return {
        type: GET_CHARITY_LOADING
    }
}

export const getCharityNews = () => (dispatch: any) => {
    dispatch(setCharityNewsLoading());
    axios.get('/api/news/getCharityNews')
    .then( (res: any)  => {
        dispatch({
            payload: res.data,
            type: GET_CHARITY_NEWS,
        });
    }).catch( (err: any) => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
        })
    });
}

export const addNews = (news: any) => (dispatch: any) => {
    axios
    .post('/api/news/add', news)
    .then( (res: any) => {
        dispatch(getRelevantNews());
        dispatch(getPregnancyNews());
        dispatch(getCharityNews());
    })
    .catch( (err: any) => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
        })
    });
}

export const getAllNews = () => (dispatch: any) => {
    dispatch(getRelevantNews());
    dispatch(getPregnancyNews());
    dispatch(getCharityNews());
}