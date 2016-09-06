import * as types from '../actions/actionTypes';

export default function produceReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_PRODUCE_SUCCESS:
            return action.produceList;

        default:
            return state;
    }
}