import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';

import { ProductsMock } from './cards.mock';
import { baseURL } from '../../../services/services';
import axiosMock from '../../../tests/config/axiosMock';
import { renderWithProvider } from '../../../tests/config/rtl';
import { Cards } from '../cards';

describe('Card', () => {
  afterEach(() => {
    axiosMock.reset();
  });
  it('should render the cards', async () => {
    axiosMock.onGet(`${baseURL}/products`).reply(200, ProductsMock);

    renderWithProvider(<Cards />);

    await waitFor(() => {
      const title = screen.getByText(/iPhone 9/i);
      const description = screen.getByText(
        /An apple mobile which is nothing like apple/i
      );
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });
});
