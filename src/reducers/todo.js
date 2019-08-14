/**
 * @name reducers/todo.js
 * @fileoverview Exports a reducer function for state.todo
 */

import { actionTypes } from '../constants';

/**
 * @name initialState Initial state for state.todo object
 */
const initialState = {
        list: [],
        isLoading: false
};

/**
 * Redux Reducer function for state.todo
 * 
 * @param {Object} state Current state (state.todo)
 * @param {Object} action Redux action object
 * @returns {Object} state return the new state for (state..todo)
 */
function reducer(state = initialState, action) {
        switch(action.type) {
                case actionTypes.GET_TODO_LIST:
                        return {
                                ...state,
                                list: [],
                                isLoading: true
                        }
                case actionTypes.GET_TODO_LIST_SUCCESS:
                        return {
                                ...state,
                                list: action.payload.list,
                                isLoading: false
                        }
                default:
                        return state;
        }
}

export default reducer;