import { actions } from '../actions/types.js';

const initialState = {
    profile: {},
    error: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        // fetch profile
        case actions.user.FETCH_PROFILE:
            return {
                ...state,
                profile: action.payload,
                error: null
            }
        // err
        case actions.error.UPDATE_ERROR:
            return {
                ...state,
                error: action.payload.message
            }
        
        default:
            return state;
    }
};