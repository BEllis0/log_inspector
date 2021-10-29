import { actions } from './types.js';
import { AuthGet, AuthDelete } from '../util/auth.js';

export function getMessagesByUser() {
    return function(dispatch) {

        dispatch({
            type: actions.updating.UPDATING_MESSAGES
        });

        AuthGet('/api/v1/messages/all')
        .then(response => {
            dispatch({
                type: actions.user.FETCH_DATA_BY_USER,
                payload: response.data
            });

            dispatch({
                type: actions.updating.FINISHED_UPDATING_MESSAGES
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

export function getMessage(id) {
    return function(dispatch) {

        AuthGet(`/api/v1/messages/${id}`)
        .then(response => {
            dispatch({
                type: actions.user.FETCH_MESSAGE,
                payload: response.data
            });

            dispatch({
                type: actions.updating.FINISHED_UPDATING_MESSAGES
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
                        message: error.response.data.message || "Error getting message",
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

export function deleteMessages(messageIdsArr) {
    return function(dispatch) {
        dispatch({
            type: actions.updating.UPDATING_MESSAGES
        });
        console.log('deleting action')
        AuthDelete('/api/v1/messages/remove', {messageIds: messageIdsArr})
        .then(response => {
            // dispatch({
            //     type: actions.user.DELETE_MESSAGES,
            //     payload: response.data
            // });

            // dispatch({
            //     type: actions.updating.FINISHED_UPDATING_MESSAGES
            // });
            
        })
        .catch(err => {
            if (error.response.status === 401 || error.response.status === 403) {
                dispatch({
                    type: actions.error.TOKEN_ERROR,
                    payload: error
                });
            } else {
                dispatch({
                    type: actions.error.DELETE_MESSAGES_ERROR,
                    payload: error.response.data
                });

                dispatch({
                    type: actions.snackbar.MESSAGE,
                    payload: {
                        message: error.response.data.message || "Error deleting messages.",
                        severity: 'error'
                    }
                });
            }
        });
    };
};