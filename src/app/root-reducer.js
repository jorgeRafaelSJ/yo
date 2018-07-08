import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import catPostsReducer from './cat-posts/duck';

export default combineReducers({
  routing: routerReducer,
  catPosts: catPostsReducer,
});