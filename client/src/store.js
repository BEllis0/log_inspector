import  { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import throttle from 'lodash.throttle';

import {pollServerMiddleware} from './util/pollServerMiddleware.js';

// const initialState = {};

const middleware = [thunk];

/*
Only saving login status on local storage
Avoiding saving sensitive user info on storage
Login status is referenced in App comp to get data on mount
returning login property to mimic the expected state data format
*/

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return {login: JSON.parse(serializedState)}
    // return JSON.parse(serializedState);
  } catch (e) {
      console.log("Error loading state from local storage", e);
    return undefined;
  }
};

/*
Only saving login status on local storage
Avoiding saving sensitive user info on storage
Login status is referenced in App comp to get data on mount
*/

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.login);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log('Error saving state to local storage', e)
  }
};

const persistedState = loadState();

//store takes a root reducer, initial state and middleware
let store;
  
// if there is a chrome extension on the browser
if (window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined) {
  store = createStore(
    rootReducer,
    persistedState,
    compose(
    applyMiddleware(...middleware, pollServerMiddleware),
    //dev tools extension set up; remove on production env
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  // if no chrome extension
  store = createStore(
      rootReducer,
      persistedState,
      compose(
      applyMiddleware(...middleware, pollServerMiddleware)
      )
  );
}

store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

export default store;