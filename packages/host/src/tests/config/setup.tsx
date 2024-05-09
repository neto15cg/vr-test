/* eslint-disable react/display-name */
//@ts-ignore

import '@testing-library/jest-dom';
import React from 'react';

jest.mock(
  'Header/root',
  () => () => {
    const HeaderApp = 'header-mock';
    //@ts-ignore
    return <HeaderApp />;
  },
  { virtual: true }
);

jest.mock(
  'Footer/roott',
  () => () => {
    const FooterApp = 'footer-mock';
    //@ts-ignore
    return <FooterApp />;
  },
  { virtual: true }
);

jest.mock(
  'Cards/root',
  () => () => {
    const CardsApp = 'cards-mock';
    //@ts-ignore
    return <CardsApp />;
  },
  { virtual: true }
);

console.error = jest.fn((...args) => {
  const [error] = args;
  const skipMessages = [
    'Browser does not support SVG',
    "Content type isn't valid",
    'Could not convert the src',
    'Error parsing input',
    'Expected `%s` listener',
    'fetch is not a function',
    'Missing src',
    'Not found',
  ];

  if (!skipMessages.some((d) => error.toString().includes(d))) {
    return null;
  }
});
