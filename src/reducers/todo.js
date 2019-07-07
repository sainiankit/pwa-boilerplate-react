import { actionTypes } from '../constants';

const initialState = {
        list: []
};

function reducer(state = initialState, action) {
        switch(action.type) {
                case actionTypes.GET_TODO_LIST_SUCCESS:
                        return {
                                ...state,
                                list: action.payload.list,
                        }
                default:
                        return state;
        }
}

export default reducer;