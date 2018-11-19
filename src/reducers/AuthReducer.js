import { POST_USER_SUCCESS,
    POST_USER_FAIL,
    POST_USER, NAME_CHANGED, TYPE_CHANGED, LOC_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    loading: false, 
    error: '', 
    user: null,
    response: null,
    company_name: '',
    company_type: '',
};

export default (state  = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAME_CHANGED:
            return { ...state, company_name: action.payload };  

        case TYPE_CHANGED:
            return {...state, company_type: action.payload};

        case LOC_CHANGED:
        return {...state, location: action.payload};

        case POST_USER:
            return {...state, loading: true, error: ''};

        case POST_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, loading: false, response: action.payload};
            
        case POST_USER_FAIL:
            return {...state, error: 'Authentication Failed.', loading: false};
    
        default:
            return state;
    }
}