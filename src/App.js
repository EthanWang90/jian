import React from 'react';
import Header from './common/header/index';
import {GlobalStyle} from './style';
import './statics/iconfont/iconfont.css';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="Ethan">
        <GlobalStyle/>
        <Header />
      </div>
    </Provider>
  );
}

export default App;
