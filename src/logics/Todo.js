/**
 * @name logics/Todo.js
 * @fileoverview This file exports an array of Todo redux-logics.
 */

import { createLogic } from 'redux-logic';
import { actionTypes } from '../constants';
import { request } from '../utils';

/**
 * @name getTodoList
 * @description redux-logic to intercept action (actionTypes.GET_TODO_LIST)
 * @summary fetches todo list asynchronously and dispacthes an action 
 *          on success or failure (see processOptions) 
 */
const getTodoList = createLogic({
        type: actionTypes.GET_TODO_LIST,
        latest: true,
        // Use returned/resolved value(s) for dispatching
        processOptions: {
                dispatchReturn: true,
                successType: actionTypes.GET_TODO_LIST_SUCCESS, 
                failType: actionTypes.GET_TODO_LIST_FAILED,
        },
        // Code below, hook into one or more of these execution
        // Phases : validate, transform, and/or process
        // Usage  : process({ getState, action }, dispatch, done)
        process({getState, action}){
                return request.get('https://jsonplaceholder.typicode.com/todos')
                                .then(result => { 
                                        // Success Payload
                                        return { list: result.data }
                                });
        }
});


export default [
        getTodoList
];