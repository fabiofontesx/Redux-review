import React from 'react';

import Sidebar from './components/Sidebar';
import Video from './components/Video';
import Header from './components/Header';

import { Provider } from 'react-redux';

import store from './store';
const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
