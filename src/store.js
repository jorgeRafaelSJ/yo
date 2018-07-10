import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { throttle } from 'lodash'; 
import { loadState, saveState } from './local-storage';
import rootReducer from './app/root-reducer';

export const history = createHistory();

const initialState = loadState();
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

//saves state of catPosts reducer to localStorage when there is a change 
//throttle does not allow the function to run more than once a second
//sidenote: This will trigger event even if updates were happening in any part of the store, including routing.
//There are some community solutions to only subscribe to parts of the store I believe. Need more research.
store.subscribe(throttle(() => {
    saveState({
        catPosts: store.getState().catPosts
    })
}, 1000));

export default store;