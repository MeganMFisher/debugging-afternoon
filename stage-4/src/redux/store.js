import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
// npm install redux-promise-middleware
import reduxPromiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));