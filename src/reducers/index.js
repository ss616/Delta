import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RecommendationReducer from './RecommendationReducer';
import ItemsReducer from './ItemsReducer';
// import PostNewReducer from './PostNewReducer';

export default combineReducers({
    auth: AuthReducer,
    rec: RecommendationReducer,
    item: ItemsReducer
});
