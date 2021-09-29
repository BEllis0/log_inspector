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
                message: action.payload.message,
                error: null
            }
        // token authenticatio err
        case actions.error.TOKEN_ERROR:
            return {
                ...state,
                loggedIn: false,
                error: action.payload
            }
            // login
        case actions.error.LOGIN_ERROR:
            return {
                ...state,
                loggedIn: false,
                error: action.payload.message
            }
        case actions.error.LOGOUT_ERROR:
            return {
                ...state,
                loggedIn: false,
                error: action.payload.message
            }
        default:
            return state;
    }
};