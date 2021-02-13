import { AuthorizationState } from './types';

const intialState = {
    authorization: {user: null, token: null},
    pending: false,
    error: false,
    emailError: false,
}

export default intialState;
