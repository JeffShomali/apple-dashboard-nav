import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import "./common/styles/app.css";

import AppRouter from './layout/AppRouter';

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  root
);
