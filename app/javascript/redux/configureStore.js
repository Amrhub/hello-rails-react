import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import messageReducer from './message/message';

const reducer = combineReducers({ message: messageReducer });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;