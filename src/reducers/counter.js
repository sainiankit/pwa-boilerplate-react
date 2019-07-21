/**
 * @name reducers/counter.js
 * @fileoverview Exports a reducer function for state.counter
 */

import { actionTypes } from '../constants';

/**
 * @name initialState Initial state for state.counter object
 */
const initialState = {
        count: 0
};

/**
 * Redux Reducer function for state.counter
 * 
 * @param {Object} state Current state (state.counter)
 * @param {Object} action Redux action object
 * @returns {Object} state return the new state for (state.counter)
 */
function reducer(state = initialState, action) {

        switch(action.type) {
                case actionTypes.INCREMENT_COUNT:
                        return {
                                ...state,
                                count: state.count + 1
                        }
                default:
                        return state;
        }
}

export default reducer;