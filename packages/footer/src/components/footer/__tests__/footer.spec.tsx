import React from 'react';

import { render, screen } from '@testing-library/react';

import { Footer } from '../footer';

describe('Footer', () => {
  it('should render the footer component', () => {
    render(<Footer />);

    const vrLogo = screen.getByTestId('vr-logo');

    const allRights = screen.getByText(
      /© 2024 vr test\. all rights reserved\./i
    );

    expect(vrLogo).toBeInTheDocument();
    expect(allRights).toBeInTheDocument();
  });
});
