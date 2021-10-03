import { actions } from './types.js';

export function closeMessage() {
    return function(dispatch) {
        dispatch({
            type: actions.snackbar.CLOSE_MESSAGE,
        });
    };
};