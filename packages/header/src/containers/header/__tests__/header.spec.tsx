import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CartMock } from './header.mock';
import { Header } from '../header';

const mockFn = () => jest.fn();

describe('Header', () => {
  it('should render the header', async () => {
    const spy = mockFn();
    render(<Header onRemoveItem={spy} cart={CartMock} />);

    expect(screen.getByTestId(/vr-logo/i)).toBeInTheDocument();

    await waitFor(() => {
      const title = screen.getByText(/OPPOF19/i);

      expect(title).toBeInTheDocument();
    });
  });

  it('should call onRemoveItem if click on remove button', async () => {
    const spy = mockFn();
    render(<Header onRemoveItem={spy} cart={CartMock} />);

    const removeButton = screen.getByTestId('remove-button-OPPOF19');

    await waitFor(() => {
      userEvent.click(removeButton);
      expect(spy).toHaveBeenCalled();
    });
  });
});
