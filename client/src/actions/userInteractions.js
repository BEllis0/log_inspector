import { actions } from './types.js';

export function copyApiKey() {
    return function(dispatch) {
        dispatch({
            type: actions.snackbar.MESSAGE,
            payload: {
                message: "API key copied.",
                severity: 'success'
            }
        });
    }
}