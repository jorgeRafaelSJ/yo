
import  { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
    counter: 0,
}
const catPostsReducer = handleActions(
    {
      [types.INCREMENT_COUNT]: (state, { payload: { amount } }) => {
        return { ...state, counter: state.counter + amount };
      }
    },
    initialState
  );
  
  export default catPostsReducer;