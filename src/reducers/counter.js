/**
 * @name reducers/counter.js
 * @fileoverview Exports a reducer function for state.counter
 */

import { actionTypes } from '../constants';

const initialState = {
        count: 0
};

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