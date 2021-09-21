import { actions } from './types.js';
import Axios from 'axios';

export function login(payloadData) {
    console.log('payload data: ', payloadData)
    return function(dispatch) {
        Axios.post('http://localhost:8080/api/v1/login/', {
            headers: {
                "content-type": "application/json",
            },
            data: payloadData
        })
        .then(response => {
            console.log('login response: ', response)
            dispatch({
                type: actions.login.LOGIN,
                payload: response.data
            });
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