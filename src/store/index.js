import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducer} from '../reducers';

export const store = new createStore(
    reducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);