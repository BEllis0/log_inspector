import { actions } from './types.js';
import Axios from 'axios';

export function register(payloadData) {
    return function(dispatch) {
        Axios.post('/api/v1/users/new', {
            headers: {
                "content-type": "application/json",
            },
            data: payloadData
        })
        .then(response => {
            dispatch({
                type: actions.register.REGISTER_USER,
                payload: response.data
            });

            dispatch({
                type: actions.snackbar.MESSAGE,
                payload: {
                    message: response.data.message || "Account created!",
                    severity: 'success'
                }
            });
        })
        .catch(error => {
            dispatch({
                type: actions.error.UPDATE_ERROR,
                payload: { message: error.response.data, isLoggedIn: false }
            });
        });
    };
};