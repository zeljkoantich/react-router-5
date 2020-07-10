import React from 'react';
import ReactDOM from 'react-dom';
import AppDiv from './App';
import { BrowserRouter } from 'react-router-dom';
import './style.scss';

ReactDOM.render(
  <BrowserRouter>
    <AppDiv />
  </BrowserRouter>,
  document.getElementById('root')
);
