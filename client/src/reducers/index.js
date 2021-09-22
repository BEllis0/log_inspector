import { combineReducers } from 'redux';
import loginReducer from './loginReducer.js';
import registerReducer from './registerReducer.js';
import userReducer from './userReducer.js';

export default combineReducers({
    login: loginReducer,
    register: registerReducer,
    user: userReducer,
});