import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
// axios
//     .post('/api/users/register', newUser)
//     .then(res => {
//         console.log(res.data);
//         this.setState({ errors: {}});
//     })
//     .catch(err => this.setState({ errors: err.response.data }));

// register user 
export const registerUser = (userData) => dispatch =>  {
    axios
        .post('/api/users/register', userData)
        .then(res => {
            console.log(res.data);
            
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const loginUserData = (userData) => dispatch => {
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

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};