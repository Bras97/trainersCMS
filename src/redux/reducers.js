import { combineReducers } from 'redux';
import posts from './Posts/reducers';
import events from './Events/reducers';
import tariffs from './Tariffs/reducers';
import users from './Users/reducers';
import reports from './Reports/reducers';
import currentUsers from './CurrentUser/reducers';
import cities from './Cities/reducers';
import faculties from './Faculties/reducers';
import authorizationUsers from './Authorization/reducers';
import reviews from './Reviews/reducers';
import comments from './Comments/reducers';

const allReducers = combineReducers({
    posts: posts,
    events: events,
    tariffs: tariffs,
    users: users,
    currentUsers: currentUsers,
    reports: reports,
    cities: cities,
    faculties: faculties,
    authorizationUsers: authorizationUsers,
    reviews: reviews,
    comments: comments
});

export default allReducers;
