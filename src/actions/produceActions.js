import * as types from './actionTypes';
import produceAPI from '../api/mockProduceApi';

export function loadProduceSuccess(produceList) {
    return { type: types.LOAD_PRODUCE_SUCCESS, produceList }
}

export function loadProduce() {
    return function (dispatch) {
        return produceAPI.getAllProduce().then(produceList => {
            dispatch(loadProduceSuccess(produceList));
        }).catch(error => {
            throw (error);
        });
    };
}