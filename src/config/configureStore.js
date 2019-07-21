/**
 * @name config/configureStore.js
 * @fileoverview This file exports the application's redux store, after appliyng 
 * middlewares and enhancers
 */

import { createLogicMiddleware } from 'redux-logic';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import logics from '../logics';

const deps = { 
        // optional injected dependencies for logic
        // anything you need to have available in your logic
        // A_SECRET_KEY: 'dsfjsdkfjsdlfjls',
        // firebase: firebaseInstance
};

// Initialise Redux Logic
const logicMiddleware = createLogicMiddleware(logics, deps);
const middleware = applyMiddleware(logicMiddleware);


// TODO: Add redux dev tools extention support
const enhancer = middleware; // could compose in dev tools too

export default function configureStore() {
  const store = createStore(rootReducer, enhancer);
  return store;
}

