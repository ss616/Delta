import { POST_USER, POST_USER_FAIL, POST_USER_SUCCESS,
            NAME_CHANGED, TYPE_CHANGED} from './types';


import axios from 'axios';
import {BASE_URL} from '../const';


export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
};

export const typeChanged = (text) => {
    return {
        type: TYPE_CHANGED,
        payload: text
    };
};

export const postUser = (company_name, company_type) => {
    url=BASE_URL+'users/';
    //console.log(user);
    
    return (dispatch) => {
        dispatch({
                type: POST_USER, payload:{name: company_name, type: company_type}
            });
        
        console.log(`Posting on Url=${url}`)
        console.log({company_name: company_name, company_type: company_type})

        axios.post(url, {company_name: company_name, company_type: company_type})
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
        payload: {...response }
    });
}

// export const loginUser = (name, type) => {
//     console.log("login");
    
//     return (dispatch) => {
//         dispatch({type: LOGIN_USER, payload:{name:name, type: type}});

//         GoogleSignin.signIn()
//         .then((data) => {
//             console.log(data);
            
//             // Create a new Firebase credential with the token
//             const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
            
//             // Login with the credential
//             firebase.auth().signInWithCredential(credential)
//                 .then((user) => {
//                     // If you need to do anything with the user, do it here
//                     // The user will be logged in automatically by the
//                     // `onAuthStateChanged` listener we set up in App.js earlier
//                     console.log('Logged in')
//                     loginUserSuccess(dispatch, user, name, type)
//                 })
//                 .catch((error) => {
//                     // For details of error codes, see the docs
//                     // The message contains the default Firebase string
//                     // representation of the error
//                     const { code, message } = error;
//                     console.log(message);
//                     loginUserFailed(dispatch)
//                 });
//         });
//     };
// };

// const loginUserFailed = (dispatch) => {
//     dispatch({
//         type: LOGIN_USER_FAIL
//     })
// }

// const loginUserSuccess = (dispatch, user, name, type) => {
//     dispatch({
//         type: LOGIN_USER_SUCCESS, 
//         payload: {...user, company_name: name, company_type: type}
//     });
// }