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

store.subscribe(throttle(() => {
    saveState({
        catPosts: store.getState().catPosts
    })
}, 1000));

export default store;