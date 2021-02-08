import {createStore, combineReducers,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { demoReducer } from '../reducers/demoReducer';

import { uiReducer } from '../reducers/uiReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    ui: uiReducer,
    demo: demoReducer
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);