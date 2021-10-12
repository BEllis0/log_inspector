import { pollServer } from "../actions/login.js";

// export function pollServerMiddleware(options = {}) {
//     const interval = setInterval(function() {
//         if (options.end) {
//             clearInterval(interval);
//         }

//         pollServer();
//     }, options.ms || 1000);
// };

// authentication middleware
// export const pollServerMiddleware = (store) => (next) => (action) => {
//     let state = store.getState();

//     if (state.login.loggedIn) {
//         if (!window.interval) {
//             console.log('interval not set yet')
//             window.interval = setInterval(function() {
//                 console.log('running poll interval')
//                 store.dispatch()
//             }, 1000);
//         }
//     }

//     return next(action);
//   };

  export const pollServerMiddleware = (store) => {
    return function wrapDispatch(next) {
      return function handleAction(action) {

        // handle removing interval after logout
        if (action.type === "TOKEN_ERROR" || action.type === "LOGOUT") {
            console.log('Token error or logout action occurred. Removing interval.')
            clearInterval(window.interval);
        }
  
        return next(action);
      }
    }
  }