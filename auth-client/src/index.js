import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Welcome from './components/Welcome';

ReactDom.render(
  <BrowserRouter>
    <App>
      <Route path='/' exact component={Welcome} />
    </App>
  </BrowserRouter>,
  document.querySelector('#root')
);
