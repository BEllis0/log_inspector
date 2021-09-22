import { actions } from './types.js';
import Axios from 'axios';
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
                type: actions.error.UPDATE_ERROR,
                payload: { message: error, isLoggedIn: false }
            });
        });
    };
};