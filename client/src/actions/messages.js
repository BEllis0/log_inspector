import { actions } from './types.js';
import { AuthGet } from '../util/auth.js';

export function getMessagesByUser() {
    return function(dispatch) {
        AuthGet('/api/v1/messages/all')
        .then(response => {
            console.log('get messages response: ', response)
            dispatch({
                type: actions.user.FETCH_DATA_BY_USER,
                payload: response.data
            });
        })
        .catch(error => {
            console.log('get messages error: ', error)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('unathorized error')
                dispatch({
                    type: actions.error.TOKEN_ERROR,
                    payload: error
                });
            } else {
                dispatch({
                    type: actions.error.FETCH_MESSAGES_ERROR,
                    payload: error
                });
            }
        });
    };
};