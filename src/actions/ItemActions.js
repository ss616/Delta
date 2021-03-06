import {GET_ITEMS, GET_ITEMS_FAIL, GET_ITEMS_SUCCESS, GET_ORDER, GET_ORDER_FAIL, 
     GET_ORDER_SUCCESS, GET_QUOTES, GET_QUOTES_FAIL, GET_QUOTES_SUCCESS, GET_ITEMS_BY_ID, GET_ITEMS_BY_ID_FAIL, GET_ITEMS_BY_ID_SUCCESS} from './types';


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

export const getItemsById = (id) =>{
    url=BASE_URL+`laptop/${id}/`;
    
    return (dispatch) => {
    dispatch({
            type: GET_ITEMS_BY_ID, 
        });

    console.log(`GET on Url=${url}`)

    axios.get(url)
    .then(function (response) {
        console.log(response);
        fetchItemsByIdSuccess(dispatch, response);
    })
    .catch(function (error) {
        console.log({... error});
        fetchItemsByIdFailed(dispatch);
    });
    }
}

export const getOrders = () =>{
    url=BASE_URL+'order/';
    
    return (dispatch) => {
        dispatch({
                type: GET_ITEMS_BY_ID, 
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


export const getQuotes = () =>{
    url=BASE_URL+`quote/`;
    
    return (dispatch) => {
    dispatch({
            type: GET_QUOTES, 
        });
    
    console.log(`GET on Url=${url}`)
    
    axios.get(url)
    .then(function (response) {
        console.log(response);
        fetchQuotesSuccess(dispatch, response);
    })
    .catch(function (error) {
        console.log({... error});
        fetchQuotesFailed(dispatch);
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

const fetchItemsByIdSuccess = (dispatch, response) => {
    dispatch({
        type: GET_ITEMS_BY_ID_SUCCESS, 
        payload: response
    });
}

const fetchItemsByIdFailed = (dispatch) => {
    dispatch({
        type: GET_ITEMS_BY_ID_FAIL
    })
}

const fetchQuotesFailed = (dispatch) => {
    dispatch({
        type: GET_QUOTES_FAIL
    })
    }
    
const fetchQuotesSuccess = (dispatch, response) => {
    dispatch({
    type: GET_QUOTES_SUCCESS, 
    payload: response
    });
}