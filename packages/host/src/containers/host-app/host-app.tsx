import React, { lazy, Suspense } from 'react';

import { HostAppContainer } from './host-app.styles';

const HeaderApp = lazy(() => import('Header/root'));
const FooterApp = lazy(() => import('Footer/root'));
const CardsApp = lazy(() => import('Cards/root'));

const HostApp = () => {
  return (
    <HostAppContainer data-testid="hostapp">
      <Suspense fallback="loading...">
        <HeaderApp />
      </Suspense>
      <Suspense fallback="loading...">
        <CardsApp />
      </Suspense>
      <Suspense fallback="loading...">
        <FooterApp />
      </Suspense>
    </HostAppContainer>
  );
};

export { HostApp };
