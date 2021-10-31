import { actions } from '../actions/types.js';

const initialState = {
    messages: [],
    selectedMessage: null,
    error: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        // fetch profile
        case actions.user.FETCH_DATA_BY_USER:
            return {
                ...state,
                messages: action.payload,
                error: null
            }
        case actions.user.FETCH_MESSAGE:
            return {
                ...state,
                selectedMessage: action.payload,
                error: null
            }
        // err
        case actions.error.FETCH_MESSAGES_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};