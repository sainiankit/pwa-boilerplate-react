/**
 * @name reducers/index.js
 * @fileoverview Exports rootReducer, combining all the imported reducers
 */

import { combineReducers } from 'redux';
import counter from './counter';
import todo from './todo';

const rootReducer = combineReducers({
        counter,
        todo
})

export default rootReducer