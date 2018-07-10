import types from './types';
import catApi from '../../../api/cats';
import  { createAction } from 'redux-actions';

/* REQUESTS CAT POSTS FROM REDDIT API */
const loadCatPosts = () => (dispatch, getState) => {
    catApi.getCatPosts()
        .then((response) => {
            
            //creates cleaner array of post data objects
            let redditPosts = response.data.data.children.map((post) => (post.data));

            dispatch({ type: types.LOAD_CAT_POSTS, payload: redditPosts });
        })
        .catch((error) => {
            console.error(error);
        })
}

/* passes post Id to pin or unpin as payload  */
const pinCatPost = createAction(types.PIN_CAT_POST, id => ({id}));
const unpinCatPost = createAction(types.UNPIN_CAT_POST, id => ({id}));

export default {
    loadCatPosts,
    pinCatPost,
    unpinCatPost,
}