import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react';

import { Wrapper, Title, SideContainer, Result } from './styles';

describe('Styles of', () => {
  it('the Wrapper has the right style', () => {
    const { container } = render(<Wrapper />);
    // Testing important styles
    expect(container.firstChild).toHaveStyle(`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
      padding: 12px;
    `);
  });

  it('the Title has the right style', () => {
    const { container } = render(<Title />);
    expect(container.firstChild).toHaveStyle(`
      width: 100%;
    `);
  });

  it('the SideContainer has the right style', () => {
    const { container } = render(<SideContainer />);
    expect(container.firstChild).toHaveStyle(`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      width: 100%;
      margin: 0;
      padding: 12px;
    `);
    expect(container.firstChild).toHaveStyleRule('max-width', '318px', {
      media: '(min-width:1024px)',
    });
  });

  it('the Result has the right style', () => {
    const { container } = render(<Result />);
    expect(container.firstChild).toHaveStyle(`
      text-align: center;
      text-transform: capitalize;
    `);
  });

  it('the Result has to be h2', () => {
    const { container } = render(<Result />);
    expect(container.firstChild.tagName).toBe('H2');
  });
});
