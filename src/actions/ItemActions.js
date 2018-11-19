import {GET_ITEMS, GET_ITEMS_FAIL, GET_ITEMS_SUCCESS, GET_ORDER, GET_ORDER_FAIL, GET_ORDER_SUCCESS} from './types';


import axios from 'axios';
import {BASE_URL} from '../const';


export const getItems = (type) =>{
    url=BASE_URL+`${type}/`;

    return (dispatch) => {
    dispatch({
            type: GET_ITEMS, 
        });

    console.log(`GET on Url=${url}`)

    axios.get(url)
    .then(function (response) {
        console.log(response);
        fetchSuccess(dispatch, response);
    })
    .catch(function (error) {
        console.log({... error});
        fetchFailed(dispatch);
    });
    }
}

export const getOrders = () =>{
    url=BASE_URL+'order/';
    
    return (dispatch) => {
        dispatch({
                type: GET_ORDER, 
            });
        
        console.log(`GET on Url=${url}`)
        
        axios.get(url)
        .then(function (response) {
            console.log(response);
            fetchOrderSuccess(dispatch, response);
        })
        .catch(function (error) {
            console.log({... error});
            fetchOrderFailed(dispatch);
        });
    }
    }



const fetchFailed = (dispatch) => {
    dispatch({
    type: GET_ITEMS_FAIL
    })
}

const fetchSuccess = (dispatch, response) => {
    dispatch({
    type: GET_ITEMS_SUCCESS, 
    payload: response
    });
}

const fetchOrderFailed = (dispatch) => {
    dispatch({
    type: GET_ORDER_FAIL
    })
}

const fetchOrderSuccess = (dispatch, response) => {
    dispatch({
    type: GET_ORDER_SUCCESS, 
    payload: response
    });
}