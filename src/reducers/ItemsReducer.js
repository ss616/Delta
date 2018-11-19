import { 
    GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL,
    GET_ORDER, GET_ORDER_FAIL, GET_ORDER_SUCCESS,
    GET_QUOTES, GET_QUOTES_SUCCESS, GET_QUOTES_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
    loading: false, 
    error: '', 
    user: null,
    data: []
};

export default (state  = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case GET_ITEMS:
            return {...state, loading: true, error: ''};

        case GET_ITEMS_SUCCESS:
            return {...state, ...INITIAL_STATE, data: action.payload.data.results};
            
        case GET_ITEMS_FAIL:
            return {...state, error: 'Loading Failed.', loading: false};

        case GET_ORDER:
            return {...state, loading: true, error: ''};

        case GET_ORDER_SUCCESS:
            return {...state, ...INITIAL_STATE, data: action.payload.data.results};
            
        case GET_ORDER_FAIL:
            return {...state, error: 'Loading Failed.', loading: false};
            
        case GET_QUOTES:
            return {...state, loading: true, error: ''};

        case GET_QUOTES_SUCCESS:
            return {...state, ...INITIAL_STATE, data: action.payload.data.results};
            
        case GET_QUOTES_FAIL:
            return {...state, error: 'Loading Failed.', loading: false};
    
        default:
            return state;
    }
}