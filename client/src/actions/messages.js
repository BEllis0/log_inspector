import { actions } from './types.js';
import { AuthGet } from '../util/auth.js';

export function getMessagesByUser() {
    return function(dispatch) {
        AuthGet('/api/v1/messages/all')
        .then(response => {
            dispatch({
                type: actions.user.FETCH_DATA_BY_USER,
                payload: response.data
            });
        })
        .catch(error => {
            if (error.response.status === 401 || error.response.status === 403) {
                dispatch({
                    type: actions.error.TOKEN_ERROR,
                    payload: error
                });
            } else {
                dispatch({
                    type: actions.error.FETCH_MESSAGES_ERROR,
                    payload: error.response.data
                });

                dispatch({
                    type: actions.snackbar.MESSAGE,
                    payload: {
                        message: error.response.data.message || "Error getting messages",
                        severity: 'error'
                    }
                });
            }
        });
    };
};

// dispatch snackbar message that messages were updated
export function updatedMessages() {
    return function(dispatch) {
        dispatch({
            type: actions.snackbar.MESSAGE,
            payload: {
                message: "Refreshed Messages.",
                severity: 'success'
            }
        });
    };
};