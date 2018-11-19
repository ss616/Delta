import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RecommendationReducer from './AuthReducer';
import ItemsReducer from './ItemsReducer';
import UsersReducer from './UsersReducer';
// import PostNewReducer from './PostNewReducer';

export default combineReducers({
    auth: AuthReducer,
    rec: RecommendationReducer,
    item: ItemsReducer,
    user: UsersReducer,
});
