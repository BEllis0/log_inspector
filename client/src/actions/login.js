import { actions } from './types.js';
import { AuthPost } from '../util/auth.js';

export function login(payloadData) {
    return function(dispatch) {
        return AuthPost('/api/v1/login/', payloadData)
        .then(response => {
            dispatch({
                type: actions.login.LOGIN,
                payload: response.data
            });

            return Promise.resolve();
        })
        .catch(error => {
            console.log('login error: ', error)
            dispatch({
                type: actions.error.LOGGIN_ERROR,
                payload: { message: error, loggedIn: false }
            });
        });
    };
};

export function logout() {
    return function(dispatch) {
        return AuthPost('/api/v1/logout/')
        .then(response => {
            dispatch({
                type: actions.login.LOGOUT,
                payload: response
            });

            return Promise.resolve();
        })
        .catch(error => {
            console.log('logout error: ', error)
            if (error.response.status === 401 || error.response.status === 403) {
                dispatch({
                    type: actions.error.TOKEN_ERROR,
                    payload: error
                });
            } else {
                dispatch({
                    type: actions.error.LOGOUT_ERROR,
                    payload: { message: error, loggedIn: false }
                });
            }
        });
    };
};