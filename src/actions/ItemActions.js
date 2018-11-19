import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, 
    POST_USER, POST_USER_FAIL, POST_USER_SUCCESS,
    NAME_CHANGED, TYPE_CHANGED} from './types';


import axios from 'axios';
import {BASE_URL} from '../const';


export const getItem = category =>{
url=BASE_URL+'users/';
console.log(user);

return (dispatch) => {
dispatch({
        type: POST_USER, 
    });

console.log(`Posting on Url=${url}`)
console.log(user)

axios.post(url, user)
.then(function (response) {
    console.log(response);
    postUserSuccess(dispatch, response);
})
.catch(function (error) {
    console.log({... error});
    postUserFailed(dispatch);
});
}
}

const postUserFailed = (dispatch) => {
dispatch({
type: POST_USER_FAIL
})
}

const postUserSuccess = (dispatch, response) => {
dispatch({
type: POST_USER_SUCCESS, 
payload: response
});
}