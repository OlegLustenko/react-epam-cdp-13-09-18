import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

import './index.css';
import {App} from './App';

const enhanceCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const logMiddleware = (store) => (next) => (action) => {
  console.log('prev state: ', store.getState());
  console.log(action);
  next(action);
  console.log('current state: ', store.getState());
};

const asyncMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    action(store.dispatch, store.getState);
  } else {
    next(action);
  }
};

const initialState = {counter: 0};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + action.payload
      };
    }
    case 'ASYNC_INCREMENT': {
      return {
        ...state,
        counter: state.counter + action.payload
      };
    }
  }
  if (action.type === 'DECREMENT') {
    return {
      ...state,
      counter: state.counter - 1
    };
  }

  return state;
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + action.payload
      };
    }
    case 'ASYNC_INCREMENT': {
      return {
        ...state,
        counter: state.counter + action.payload
      };
    }
  }
  if (action.type === 'DECREMENT') {
    return {
      ...state,
      counter: state.counter - 1
    };
  }

  return state;
};

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
});

const store = createStore(
  rootReducer,
  {
    counter: {
      counter: 500
    }
  },
  enhanceCompose(applyMiddleware(ReduxThunk, logMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
