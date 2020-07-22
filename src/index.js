// Pull base path from .env to support deploying to a
// server path other than root. Useful for Github Pages.
require('dotenv').config();

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import initialState from './state';
import rootReducer from './state/root-reducer';
import theme, { GlobalStyles } from './view/theme';
import App from './view/app';
import FourOhFour from './view/404';

const store = createStore(rootReducer, initialState);

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={`/${process.env.BASE_PATH}`}>
        <Switch>
          <Route path={'/'} exact component={App} />
          <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);
