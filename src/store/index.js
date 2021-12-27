import { createStore, applyMiddleware, compose } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middleware = [thunk]

const store = createStore(
  reducer, compose(
    applyMiddleware(...middleware),

    // typeof window === 'object' &&
    //   typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    //   ? window.__REDUX_DEVTOOLS_EXTENSION__()
    //   : (f) => f
  )
);

export default store;
