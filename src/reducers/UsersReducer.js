import { 
    GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
    loading: false, 
    error: '', 
    user: null,
    data: []
};

export default (state  = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case GET_USERS:
            return {...state, loading: true, error: ''};

        case GET_USERS_SUCCESS:
            return {...state, ...INITIAL_STATE, data: action.payload.results};
            
        case GET_USERS_FAIL:
            return {...state, error: 'Authentication Failed.', loading: false};
    
        default:
            return state;
    }
}