import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import {configureStore} from '@reduxjs/toolkit';

const enhancers = [
    applyMiddleware(thunk),
]

if (process.env.NODE_ENV !== 'production') {
    window.__REDUX_DEVTOOLS_EXTENSION__ && enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

export const store = configureStore({
    enhancers: enhancers,
    reducer: rootReducer,
});


