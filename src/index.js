import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'modern-normalize';
import { Global } from '@emotion/react';
import { GlobalStyles } from './index.styled';

import './index.styled.js';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
