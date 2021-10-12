import { actions } from './types.js';
import { AuthPost, AuthGet } from '../util/auth.js';

import { getProfile } from './users.js';
import { getMessagesByUser } from './messages.js';

export function login(payloadData) {
    return function(dispatch) {
        return AuthPost('/api/v1/login/', payloadData)
        .then(response => {
            dispatch({
                type: actions.login.LOGIN,
                payload: response.data
            });

            dispatch({
                type: actions.snackbar.MESSAGE,
                payload: {
                    message: response.data.message,
                    severity: 'success'
                }
            });

            getProfile();
            getMessagesByUser();
            return Promise.resolve();
        })
        .catch(error => {
            dispatch({
                type: actions.error.LOGIN_ERROR,
                payload: { message: error.response.data, loggedIn: false }
            });

            dispatch({
                type: actions.snackbar.MESSAGE,
                payload: {
                    message: error.response.data.message,
                    severity: 'error'
                }
            });

            return Promise.reject();
        });
    };
};

export function pollServer() {
    return function(dispatch) {
        return AuthGet('/api/v1/refresh/poll/token')
        .then(response => {
            console.log('Successfully pinged server.', response);
            // return Promise.resolve();
        })
        .catch(error => {
            console.log('token poll error: ', error);
            dispatch({
                type: actions.error.TOKEN_ERROR,
                payload: error
            });

            dispatch({
                type: actions.snackbar.MESSAGE,
                payload: {
                    message: error.response.data.message || "Session ended, please sign in.",
                    severity: 'error'
                }
            });
            // return Promise.reject();
        });
    };
};

export function logout() {
    return function(dispatch) {
        return AuthPost('/api/v1/logout/')
        .then(response => {
            dispatch({
                type: actions.logout.LOGOUT,
                payload: response
            });

            dispatch({
                type: actions.snackbar.MESSAGE,
                payload: {
                    message: response.data.message || "Successfully logged out.",
                    severity: 'success'
                }
            });
        })
        .catch(error => {
            if (error.response.status === 401 || error.response.status === 403) {
                dispatch({
                    type: actions.error.TOKEN_ERROR,
                    payload: error
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
                    type: actions.error.LOGOUT_ERROR,
                    payload: { message: error, loggedIn: false }
                });

                dispatch({
                    type: actions.snackbar.MESSAGE,
                    payload: {
                        message: error.response.data.message || "Error logging out.",
                        severity: 'error'
                    }
                });
            }
        });
    };
};