import { actions } from './types.js';
import { AuthGet, AuthPatch, AuthDelete } from '../util/auth.js';

export function getProfile() {
    return function(dispatch) {
        AuthGet('/api/v1/users/')
        .then(response => {
            console.log('get profile response: ', response)
            dispatch({
                type: actions.user.FETCH_PROFILE,
                payload: response.data
            });
        })
        .catch(error => {
            console.log('get profile error: ', error)
            if (error.response.status === 401 || error.response.status === 403) {
                dispatch({
                    type: actions.error.TOKEN_ERROR,
                    payload: error.response.data
                });

                dispatch({
                    type: actions.snackbar.MESSAGE,
                    payload: {
                        message: error.response.data.message || "Session ended, please sign in.",
                        severity: 'error'
                    }
                });
            } else {
                dispatch({
                    type: actions.error.USER_UPDATE_ERROR,
                    payload: error.response.data
                });

                dispatch({
                    type: actions.snackbar.MESSAGE,
                    payload: {
                        message: error.response.data.message || "Cannot fetch profile",
                        severity: 'error'
                    }
                });
            }
        });
    };
};

export function updateUsername(domainName) {
    return function(dispatch) {
        AuthPatch('/api/v1/users/update/domains', {domainName: domainName })
        .then(response => {
            dispatch({
                type: actions.user.UPDATE_DOMAIN,
                payload: response
            });

            dispatch({
                type: actions.snackbar.MESSAGE,
                payload: {
                    message: response.data.message || "Updated Username.",
                    severity: 'success'
                }
            });
        })
        .catch(error => {
            console.log('update domain error: ', error);
            if (error.response.status === 401 || error.response.status === 403) {
                dispatch({
                    type: actions.error.TOKEN_ERROR,
                    payload: error
                });

                dispatch({
                    type: actions.snackbar.MESSAGE,
                    payload: {
                        message: error.response.data.message || "Session ended, please sign in again.",
                        severity: 'error'
                    }
                });
            } else {
                dispatch({
                    type: actions.error.USER_UPDATE_ERROR,
                    payload: error.response.data
                });

                dispatch({
                    type: actions.snackbar.MESSAGE,
                    payload: {
                        message: error.response.data.message || "Error updating username.",
                        severity: 'error'
                    }
                });
            }
        });
    };
};

export function updateDomains(domainName) {
    return function(dispatch) {
        AuthPatch('/api/v1/users/update/domains', {domainName: domainName })
        .then(response => {
            dispatch({
                type: actions.user.UPDATE_DOMAIN,
                payload: response
            });

            dispatch({
                type: actions.snackbar.MESSAGE,
                payload: {
                    message: response.data.message || "Domain added.",
                    severity: 'success'
                }
            });
        })
        .catch(error => {
            console.log('update domain error: ', error);
            if (error.response.status === 401 || error.response.status === 403) {
                dispatch({
                    type: actions.error.TOKEN_ERROR,
                    payload: error
                });

                dispatch({
                    type: actions.snackbar.MESSAGE,
                    payload: {
                        message: error.response.data.message || "Session ended, please sign in again.",
                        severity: 'error'
                    }
                });
            } else {
                dispatch({
                    type: actions.error.USER_UPDATE_ERROR,
                    payload: error.response.data
                });

                dispatch({
                    type: actions.snackbar.MESSAGE,
                    payload: {
                        message: error.response.data.message || "Error adding domain.",
                        severity: 'error'
                    }
                });
            }
        });
    };
};

export function deleteDomain(domainName) {
    return function(dispatch) {
        AuthDelete('/api/v1/users/delete/domain', {domainName: domainName })
        .then(response => {
            dispatch({
                type: actions.user.DELETE_DOMAIN,
                payload: response
            });

            dispatch({
                type: actions.snackbar.MESSAGE,
                payload: {
                    message: response.data.message || "Domain deleted.",
                    severity: 'success'
                }
            });
        })
        .catch(error => {
            console.log('delete domain error: ', error);
            if (error.response.status === 401 || error.response.status === 403) {
                dispatch({
                    type: actions.error.TOKEN_ERROR,
                    payload: error
                });

                dispatch({
                    type: actions.snackbar.MESSAGE,
                    payload: {
                        message: error.response.data.message || "Session ended, please sign in again.",
                        severity: 'error'
                    }
                });
            } else {
                dispatch({
                    type: actions.error.USER_UPDATE_ERROR,
                    payload: error.response.data
                });

                dispatch({
                    type: actions.snackbar.MESSAGE,
                    payload: {
                        message: error.response.data.message,
                        severity: 'error'
                    }
                });
            }
        });
    };
};

export function updateUserSettings(userSettings) {
    return function(dispatch) {
        AuthPatch('/api/v1/users/update/user-settings', userSettings)
        .then(response => {
            dispatch({
                type: actions.user.UPDATE_USER_SETTINGS,
                payload: response
            });

            dispatch({
                type: actions.snackbar.MESSAGE,
                payload: {
                    message: response.data.message || "Updated user settings.",
                    severity: 'success'
                }
            });
        })
        .catch(error => {
            console.log('update domain error: ', error);
            if (error.response.status === 401 || error.response.status === 403) {
                dispatch({
                    type: actions.error.TOKEN_ERROR,
                    payload: error.response.data
                });

                dispatch({
                    type: actions.snackbar.MESSAGE,
                    payload: {
                        message: error.response.data.message || "Session ended, please sign in again.",
                        severity: 'error'
                    }
                });
            } else {
                dispatch({
                    type: actions.error.USER_UPDATE_ERROR,
                    payload: error
                });

                dispatch({
                    type: actions.snackbar.MESSAGE,
                    payload: {
                        message: error.response.data.message || "Error updating user settings.",
                        severity: 'error'
                    }
                });
            }
        });
    };
};