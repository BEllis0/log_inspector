import { actions } from '../actions/types.js';

const initialState = {
    error: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        // register user
        case actions.register.REGISTER_USER:
            return {
                ...state,
                register: action.payload,
                error: null
            }
        // err
        case actions.error.UPDATE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};