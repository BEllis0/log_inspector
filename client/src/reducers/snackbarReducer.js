import { actions } from '../actions/types.js';

const initialState = {
    message: null,
    severity: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        // Message for snackbar component
        case actions.snackbar.MESSAGE:
            return {
                ...state,
                message: action.payload.message,
                severity: action.payload.severity
            }
        case actions.snackbar.CLOSE_MESSAGE:
            return {
                ...state,
                message: null,
                severity: null
            }
        default:
            return state;
    }
};