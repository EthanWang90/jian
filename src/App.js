import React from 'react';
import Header from './common/header/index';
import {GlobalStyle} from './style';
import './statics/iconfont/iconfont.css';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Detail from './pages/detail/index';

function App() {
  return (
    <Provider store={store}>
      <div className="Ethan">
        <GlobalStyle/>
        <Header />
        <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
