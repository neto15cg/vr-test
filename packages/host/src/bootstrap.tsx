import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'shared_state';

import Root from './root';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider>
        <Root />
      </Provider>
    </React.StrictMode>
  );
}
