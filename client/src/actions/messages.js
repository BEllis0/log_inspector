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
            dispatch({
                type: actions.error.UPDATE_ERROR,
                payload: { message: error }
            });
        });
    };
};