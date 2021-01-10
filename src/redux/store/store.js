import { createStore, applyMiddleware } from 'redux';
import allReducers from '../reducers';

export default createStore(allReducers);
