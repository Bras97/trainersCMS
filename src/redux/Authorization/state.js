import { AuthorizationState } from './types';

const intialState = {
    authorization: {user: null, token: null},
    pending: false,
    error: false,
}

export default intialState;