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
                    payload: error
                });
            } else {
                dispatch({
                    type: actions.error.USER_UPDATE_ERROR,
                    payload: { message: error }
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
        })
        .catch(error => {
            console.log('update domain error: ', error);
            if (error.response.status === 401 || error.response.status === 403) {
                dispatch({
                    type: actions.error.TOKEN_ERROR,
                    payload: error
                });
            } else {
                dispatch({
                    type: actions.error.USER_UPDATE_ERROR,
                    payload: error
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
        })
        .catch(error => {
            console.log('delete domain error: ', error);
            if (error.response.status === 401 || error.response.status === 403) {
                dispatch({
                    type: actions.error.TOKEN_ERROR,
                    payload: error
                });
            } else {
                dispatch({
                    type: actions.error.USER_UPDATE_ERROR,
                    payload: error
                });
            }
        });
    };
};