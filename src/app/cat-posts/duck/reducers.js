
import  { handleActions } from 'redux-actions';
import types from './types';

/* INITIAL STATE */
const initialState = {
    unpinnedPosts: [],
    pinnedPosts: [],
    pinnedPostIds: {},
}

/* REDUCER */
const catPostReducer = handleActions(
    {
      [types.LOAD_CAT_POSTS]: (state, action) => {
        //when triggered from api request, it will remove any posts previously stored 
        //in localStorage as pinnedPosts since the id would have also been added to pinnedPostIds
        let withoutPreviouslyPinned = action.payload.filter(post => !state.pinnedPostIds[post.id]);
        return { ...state, unpinnedPosts: withoutPreviouslyPinned }
      },
      [types.PIN_CAT_POST]: (state, action) => {
        let { id } = action.payload;
        //removed newly pinned from unpinned and add to pinned
        let unpinned = state.unpinnedPosts.filter(post => post.id !== id);
        let postToPin = state.unpinnedPosts.filter(post => post.id === id)[0];
        
        return { ...state, 
            unpinnedPosts: [...unpinned],
            pinnedPosts: [ postToPin, ...state.pinnedPosts ],
            pinnedPostIds: { ...state.pinnedPostIds, [id]: true },
        }
      }, 
      [types.UNPIN_CAT_POST]: (state, action) => {
        let { id } = action.payload;
        //removed newly unpinned from pinned and add to unpinned
        let pinned = state.pinnedPosts.filter(post => post.id !== id);
        let postToUnpin = state.pinnedPosts.filter(post => post.id === id)[0];
        //remove unpinned id from id storage
        let { [id]: value, ...pinnedPostIdRemoved } = state.pinnedPostIds;

        return { ...state, 
            pinnedPosts: [ ...pinned ],
            unpinnedPosts: [ postToUnpin, ...state.unpinnedPosts],
            pinnedPostIds: { ...pinnedPostIdRemoved },
        }
      },
    },
    initialState
  );
  
  export default catPostReducer;