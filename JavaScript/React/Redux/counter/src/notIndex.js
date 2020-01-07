import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

//let store = createStore()
// Reducer says how actions transform state

const increment = () => {
  return { type: 'INCREMENT' };
};

const decrement = () => {
  return { type: 'DECREMENT' };
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1;
    }
    case 'DECREMENT': {
      return state - 1;
    }
    default:
      return state;
  }
};

let store = createStore(counter);
store.subscribe(() => console.log(`${store.getState()} <= store.getState`));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
