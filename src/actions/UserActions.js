import {GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS,} from './types';


import axios from 'axios';
import {BASE_URL} from '../const';


export const getUsers = () =>{
url=BASE_URL+'profiles/';

return (dispatch) => {
dispatch({
        type: GET_USERS, 
    });

console.log(`GET on Url=${url}`)

axios.get(url)
.then(function (response) {
    console.log(response);
    fetchUsersSuccess(dispatch, response);
})
.catch(function (error) {
    console.log({... error});
    fetchUsersFailed(dispatch);
});
}
}

const fetchUsersFailed = (dispatch) => {
dispatch({
type: GET_USERS_FAIL
})
}

const fetchUsersSuccess = (dispatch, response) => {
dispatch({
type: GET_USERS_SUCCESS, 
payload: response
});
}