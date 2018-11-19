import {GET_ITEMS, GET_ITEMS_FAIL, GET_ITEMS_SUCCESS,} from './types';


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