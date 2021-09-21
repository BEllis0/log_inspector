
export const actions = {
    // check if user is logged in based on finding JWT
    login: {
        LOGIN: 'LOGIN',
        LOGIN_CHECK: 'LOGIN_CHECK'
    },
    logout: {
        LOGOUT: 'LOGOUT'
    },
    register: {
        REGISTER_USER: 'REGISTER_USER'
    },
    // page change reference for different displays
    pageChange: {
        PAGE_CHANGE: 'PAGE_CHANGE'
    },
    //profile information
    profile: {
        FETCH_PROFILE: 'FETCH_PROFILE',
    },
    fetchData: {
        FETCH_DATA_BY_USER: 'FETCH_DATA_BY_USER',
        FETCH_DATA_BY_COMPANY: 'FETCH_DATA_BY_COMPANY',
    },
    //error handling
    error: {
        UPDATE_ERROR: 'UPDATE_ERROR', // updates if error happens on api calls to server
        SET_ERROR: 'SET_ERROR' // used in componentDidCatch
    }
}