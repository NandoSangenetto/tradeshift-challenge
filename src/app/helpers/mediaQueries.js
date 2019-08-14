import { css } from 'styled-components';

export const sizes = {
  desktop: 1024,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  const value =
    label === 'phone' || label === 'tablet' || label === 'desktop'
      ? sizes[label]
      : label;

  acc[label] = (...args) => css`
    @media (min-width: ${value}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
