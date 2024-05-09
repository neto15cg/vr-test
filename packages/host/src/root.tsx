import React from 'react';

import App from './app';
import { Provider } from './states/slices';
import GlobalStyle from './styles/global.styles';

const Root = () => (
  <Provider>
    <GlobalStyle />
    <App />
  </Provider>
);

export default Root;
