import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from '../actions/';

let cloneObject = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

let newState = { user: { loggedIn: false } };

export default (state, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            newState = cloneObject(state);
            newState.user.loggedIn = true;
            return newState;
        case LOGOUT_SUCCESS:
            newState = cloneObject(state);
            newState.user.loggedIn = false;
            return newState;
        default:
            return state || newState;
    }
}