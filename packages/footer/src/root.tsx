import React from 'react';

import App from './app';
import { Provider } from './states/slices';

const Root = () => (
  <Provider>
    <App />
  </Provider>
);

export default Root;
