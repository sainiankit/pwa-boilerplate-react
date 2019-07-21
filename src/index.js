 /**
  * @name index.js
  * @fileoverview Entry Point for frontend application,
  * Registers Service Worker, Initialises Redux store and provides it to the App.
  * Loads the App Component into #root
  */

import React from 'react';
import ReactDOM from 'react-dom';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import { Provider } from 'react-redux';
import configureStore from './config/configureStore';
import App from './app';

// Register service worker
if ('serviceWorker' in navigator) {
        const registration = runtime.register();
}

// Initialise Redux Store
const store = configureStore();

// Load the App Component into #root.
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
