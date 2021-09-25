import { actions } from '../actions/types.js';

const initialState = {
    loggedIn: false,
    error: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        // login
        case actions.login.LOGIN:
            return {
                ...state,
                loggedIn: true,
                error: null
            }
        // logout
        case actions.logout.LOGOUT:
            return {
                ...state,
                loggedIn: false,
                error: null
            }
        // token authenticatio err
        case actions.error.TOKEN_ERROR:
            return {
                ...state,
                loggedIn: false,
                error: action.payload
            }
        default:
            return state;
    }
};