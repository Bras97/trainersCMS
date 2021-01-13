import { createStore, applyMiddleware } from 'redux';
import allReducers from '../reducers';
import reduxThunk from 'redux-thunk';

export default createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
