import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import "regenerator-runtime/runtime";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
   key: 'CookBook',
   storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
   persistedReducer,
   composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store)