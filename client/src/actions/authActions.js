import axios from 'axios';
import { GET_ERRORS } from "./types";

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