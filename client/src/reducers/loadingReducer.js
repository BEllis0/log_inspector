import { actions } from '../actions/types.js';

const initialState = {
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case actions.updating.UPDATING_MESSAGES:
            return {
                ...state,
                loading: true
            }
        case actions.updating.FINISHED_UPDATING_MESSAGES:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
};