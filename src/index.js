/* Index.js
 Entry Point for frontend application,
 - Loads the App Component into #root.
 - Intializes Redux Store 
 - Registers Service Worker */

import React from 'react';
import ReactDOM from 'react-dom';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './app';

// Register service worker
if ('serviceWorker' in navigator) {
        const registration = runtime.register();
}

// Initialise Redux Store
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Load the App Component into #root.
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
