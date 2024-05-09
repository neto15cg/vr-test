/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from '../../states/slices';

const AllTheProviders = ({ children }) => <Provider>{children}</Provider>;

export const renderWithProvider = (ui, options?) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { userEvent };
