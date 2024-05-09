import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HostApp } from './containers/host-app/host-app';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HostApp />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
