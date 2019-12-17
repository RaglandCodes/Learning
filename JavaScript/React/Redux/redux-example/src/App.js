//React
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

//Components
import Posts from './components/Post';
import PostForm from './components/PostForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
