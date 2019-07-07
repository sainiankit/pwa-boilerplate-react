import { createLogic } from 'redux-logic';
import { actionTypes } from '../constants';
import { request } from '../utils';

const getTodoList = createLogic({
        type: actionTypes.GET_TODO_LIST,
        latest: true,
        processOptions: {
                // optional since the default is true when dispatch is omitted from
                // use returned/resolved value(s) for dispatching
                dispatchReturn: true,
                successType: actionTypes.GET_TODO_LIST_SUCCESS, 
                failType: actionTypes.GET_TODO_LIST_FAILED,
        },
        // your code here, hook into one or more of these execution
        // phases: validate, transform, and/or process
        // Usage (process) : process({ getState, action }, dispatch, done)
        process({getState, action}){
                /**
                 * TODO:
                 * Use api Constants here
                 */
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