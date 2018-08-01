import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import langReducer from './langReducer';
import newsReducer from './newsReducer';
import profileReducer from './profileReducer';


export default combineReducers({
    admin: adminReducer,
    auth: authReducer,
    errors: errorsReducer,
    news: newsReducer,
    profile: profileReducer,
    lang: langReducer
});