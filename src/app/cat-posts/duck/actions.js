import types from './types';
import catApi from '../../../api/cats';
import  { createAction } from 'redux-actions';

const loadCatPosts = () => (dispatch, getState) => {
    catApi.getCatPosts()
        .then((response) => {
            let redditPosts = [];
            
            response.data.data.children.forEach((post) => {
                redditPosts.push(post.data);
            })

            dispatch({ type: types.LOAD_CAT_POSTS, payload: redditPosts })
        })
        .catch((error) => {
            console.error(error)
        })
}

const pinCatPost = createAction(types.PIN_CAT_POST, id => ({id}));
const unpinCatPost = createAction(types.UNPIN_CAT_POST, id => ({id}));

export default {
    loadCatPosts,
    pinCatPost,
    unpinCatPost,
}