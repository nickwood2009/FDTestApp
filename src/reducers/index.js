import {combineReducers} from 'redux';
import produceList from './produceReducer';

const rootReducer = combineReducers({
    produceList
});

export default rootReducer;