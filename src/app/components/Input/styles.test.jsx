import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import { Fieldset, InputField, Label } from './styles';

describe('Styles of', () => {
  it('the Fieldset has the right style', () => {
    const { container } = render(<Fieldset />);
    // Flex properties may be the only important styles here
    expect(container.firstChild).toHaveStyle(`
      display: flex;
      flex-direction: column;
      justify-content: center;
    `);
  });

  it('the InputField has the right style', () => {
    const { container } = render(<InputField />);
    expect(container.firstChild).toHaveStyle(`
      border: 1px solid #cad7dc;
      color: #0f1519;
      display: block;
      width: 100%;
      font-size: 12px;
      background-color: #fff;
    `);
  });

  it('the Label has the right style', () => {
    const { container } = render(<Label />);
    expect(container.firstChild).toHaveStyle(`
      line-height: 1.1;
      text-transform: uppercase;
      font-size: 12px;
      white-space: nowrap;
      text-overflow: ellipsis;
    `);
  });
});
