
import  { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
    unpinnedPosts: [],
    pinnedPosts: [],
    pinnedPostIds: {},
}

const catPostReducer = handleActions(
    {
      [types.LOAD_CAT_POSTS]: (state, action) => {
        let withoutPreviouslyPinned = action.payload.filter(post => !state.pinnedPostIds[post.id]);
        return { ...state, unpinnedPosts: withoutPreviouslyPinned }
      },
      [types.PIN_CAT_POST]: (state, action) => {
        let { id } = action.payload;
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
        let pinned = state.pinnedPosts.filter(post => post.id !== id);
        let postToUnpin = state.pinnedPosts.filter(post => post.id === id)[0];
        let { [id]: value, ...pinnedPostIdRemoved } = state.pinnedPostIds
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