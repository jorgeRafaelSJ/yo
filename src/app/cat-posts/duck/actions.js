import types from './types';
import catApi from '../../../api/cats';

const loadCatPosts = () => (dispatch, getState) => {
    catApi.getCatPosts()
        .then((response) => {
            let redditPosts = response.data.data.children;
            let localStoragePosts = getCatPostsFromLocalStorage();

            dispatch({ type: types.LOAD_CAT_POSTS, payload:  })
        })
        .catch((error) => {
            console.error(error)
        })
}

const getCatPostsFromLocalStorage = () => {
    
}

export default {
    loadCatPosts,
}