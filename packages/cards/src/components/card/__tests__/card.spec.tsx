import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';

import { ProductMock } from './card.mock';
import { userEvent } from '../../../tests/config/rtl';
import { Card } from '../card';

const mockFn = () => jest.fn();

const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

describe('Card', () => {
  it('should render the card', () => {
    render(<Card onClick={mockFn} product={ProductMock} />);

    const title = screen.getByText(ProductMock.title);
    const description = screen.getByText(ProductMock.description);
    const price = screen.getByText(formatCurrency.format(ProductMock.price));

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it('should call onClick when clicked', async () => {
    const spy = mockFn();
    render(<Card onClick={spy} product={ProductMock} />);

    const card = screen.getByRole('button');
    expect(card).toBeInTheDocument();

    await waitFor(() => userEvent.click(card));

    expect(spy).toHaveBeenCalledWith(ProductMock);
  });
});
