
export const actions = {
    // check if user is logged in based on finding JWT
    login: {
        LOGIN_CHECK: 'LOGIN_CHECK'
    },
    logout: {
        LOGOUT: 'LOGOUT'
    },
    // page change reference for different displays
    pageChange: {
        PAGE_CHANGE: 'PAGE_CHANGE'
    },
    //profile information
    profile: {
        FETCH_PROFILE: 'FETCH_PROFILE',
    },
    //error handling
    error: {
        UPDATE_ERROR: 'UPDATE_ERROR', // updates if error happens on api calls to server
        SET_ERROR: 'SET_ERROR' // used in componentDidCatch
    }
}