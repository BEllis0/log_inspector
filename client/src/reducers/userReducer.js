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
        // update last name
        case actions.user.UPDATE_LAST_NAME:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    lastName: action.payload.data.data
                },
                error: null
            }
        // update first name
        case actions.user.UPDATE_FIRST_NAME:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    firstName: action.payload.data.data
                },
                error: null
            }
        // update username
        case actions.user.UPDATE_USERNAME:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    username: action.payload.data.data
                },
                error: null
            }
        // update email
        case actions.user.UPDATE_EMAIL:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    email: action.payload.data.data
                },
                error: null
            }
        // update domain
        case actions.user.UPDATE_DOMAIN:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    domains: action.payload.data.data
                },
                message: action.payload.message,
                error: null
            }
        // delete domain
        case actions.user.DELETE_DOMAIN:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    domains: action.payload.data.data
                },
                error: null
            }
        // err
        case actions.error.USER_UPDATE_ERROR:
            return {
                ...state,
                error: action.payload.message
            }
        default:
            return state;
    }
};