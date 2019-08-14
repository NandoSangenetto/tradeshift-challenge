import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import { PrimaryButton, SecondaryButton, ErrorList } from './styles';

describe('Styles of', () => {
  it('the PrimaryButton has the right style', () => {
    const { container } = render(<PrimaryButton />);
    expect(container.firstChild).toHaveStyle(`
      cursor: pointer;
      background-color: rgb(0, 174, 255);
      color: rgb(255, 255, 255);
    `);
  });

  it('the SecondaryButton has the right style', () => {
    const { container } = render(<SecondaryButton />);
    expect(container.firstChild).toHaveStyle(`
      cursor: pointer;
      background-color: background-color: rgb(255, 255, 255);
      color: rgb(15, 21, 25);
    `);
  });

  it('the ErrorList has the right style', () => {
    const { container } = render(<ErrorList />);
    expect(container.firstChild).toHaveStyle(`
      color: #bc0000;
      font-size: 14px;
    `);
  });
});
