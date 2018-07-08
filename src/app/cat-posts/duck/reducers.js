
import  { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
    posts: [],
}
const catPostsReducer = handleActions(
    {
      [types.LOAD_CAT_POSTS]: (state, action) => {
        return { ...state, posts: action.payload }
      }
    },
    initialState
  );
  
  export default catPostsReducer;