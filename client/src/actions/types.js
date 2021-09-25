
export const actions = {
    // check if user is logged in based on finding JWT
    login: {
        LOGIN: 'LOGIN',
        LOGIN_CHECK: 'LOGIN_CHECK',
    },
    logout: {
        LOGOUT: 'LOGOUT'
    },
    register: {
        REGISTER_USER: 'REGISTER_USER'
    },
    user: {
        FETCH_PROFILE: 'FETCH_PROFILE',
        FETCH_DATA_BY_USER: 'FETCH_DATA_BY_USER',
        UPDATE_FIRST_NAME: 'UPDATE_FIRST_NAME',
        UPDATE_LAST_NAME: 'UPDATE_LAST_NAME',
        UPDATE_USERNAME: 'UPDATE_USERNAME',
        UPDATE_EMAIL: 'UPDATE_EMAIL',
        UPDATE_DOMAIN: 'UPDATE_DOMAIN',
        DELETE_DOMAIN: 'DELETE_DOMAIN',
    },
    company: {
        FETCH_DATA_BY_COMPANY: 'FETCH_DATA_BY_COMPANY',
    },
    // page change reference for different displays
    pageChange: {
        PAGE_CHANGE: 'PAGE_CHANGE'
    },
    //error handling
    error: {
        UPDATE_ERROR: 'UPDATE_ERROR',
        SET_ERROR: 'SET_ERROR',
        LOGIN_ERROR: 'LOGIN_ERROR',
        TOKEN_ERROR: 'TOKEN_ERROR',
        FETCH_MESSAGES_ERROR: 'FETCH_MESSAGES_ERROR',
        USER_UPDATE_ERROR: 'USER_UPDATE_ERROR'
    }
}