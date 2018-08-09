import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'


const initState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initState,
    compose(
        applyMiddleware(...middleware),
        // (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
