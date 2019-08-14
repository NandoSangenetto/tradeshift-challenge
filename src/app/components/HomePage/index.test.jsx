import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import HomePage from '.';

describe('HomePage test', () => {
  it('Should render the component properly', () => {
    const { container } = render(<HomePage />);
    expect(container).toBeInTheDocument();
  });

  it('Should not render the Triangle component', () => {
    const { container } = render(<HomePage />);

    const triangle = container.querySelector('svg');

    expect(triangle).toBe(null);
  });

  it('Should not render the Triangle when has state', () => {
    const { container } = render(<HomePage />);

    const fields = container.querySelectorAll('input');
    fields.forEach(field => {
      // Making a valid triangle
      fireEvent.change(field, {
        target: { value: '100' },
      });
    });

    const submitButton = container.querySelector('button[type="submit"]');
    fireEvent.click(submitButton);

    const triangle = container.querySelector('svg');

    expect(triangle).not.toBe(null);
  });
});
