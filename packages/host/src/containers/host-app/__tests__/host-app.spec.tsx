import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';

import { HostApp } from '../host-app';

describe('HostApp', () => {
  it('should render the host-app', async () => {
    render(<HostApp />);
    await waitFor(() => {
      const hostapp = screen.getByTestId('hostapp');
      expect(hostapp).toBeInTheDocument();
    });
  });
});
