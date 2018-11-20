import { 
    GET_RECOMMENDATIONS, GET_ITEM_FAIL, GET_RECOMMENDATIONS_SUCCESS, GET_RECOMMENDATIONS_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    loading: false, 
    error: '', 
    user: null,
    data: [],
    opt: []
};

export default (state  = INITIAL_STATE, action) => {
    console.log(action.payload)
    switch (action.type) {
        
        case GET_RECOMMENDATIONS:
            return {...state, loading: true, error: ''};

        case GET_RECOMMENDATIONS_SUCCESS:
            return {...state, ...INITIAL_STATE, data: action.payload.data.results};
            
        case GET_RECOMMENDATIONS_FAIL:
            return {...state, error: 'Authentication Failed.', loading: false};
    
        default:
            return state;
    }
}