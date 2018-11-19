import {GET_RECOMMENDATIONS, GET_RECOMMENDATIONS_FAIL, GET_RECOMMENDATIONS_SUCCESS,} from './types';


import axios from 'axios';
import {BASE_URL} from '../const';


export const getRecommendations = () =>{
url=BASE_URL+'rec1/' ;

return (dispatch) => {
dispatch({
        type: GET_RECOMMENDATIONS, 
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

const fetchFailed = (dispatch) => {
dispatch({
type: GET_RECOMMENDATIONS_FAIL
})
}

const fetchSuccess = (dispatch, response) => {
dispatch({
type: GET_RECOMMENDATIONS_SUCCESS, 
payload: response
});
}