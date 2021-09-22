import { actions } from './types.js';
import { AuthGet } from '../util/auth.js';

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
            dispatch({
                type: actions.error.UPDATE_ERROR,
                payload: { message: error, isLoggedIn: false }
            });
        });
    };
};