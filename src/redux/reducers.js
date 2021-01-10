import { combineReducers } from 'redux';
import posts from './Posts/reducers';

const allReducers = combineReducers({
    posts: posts
});

export default allReducers;
