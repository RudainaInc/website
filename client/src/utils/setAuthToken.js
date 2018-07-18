import axios from 'axios';

const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['Autherization'] = token;
    } else {
        delete axios.defaults.headers.common['Autherization'];
    }
} 

export default setAuthToken;