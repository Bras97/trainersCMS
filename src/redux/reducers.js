import { combineReducers } from 'redux';
import posts from './Posts/reducers';
import events from './Events/reducers';
import tariffs from './Tariffs/reducers';

const allReducers = combineReducers({
    posts: posts,
    events: events,
    tariffs: tariffs
});

export default allReducers;
