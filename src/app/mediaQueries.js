import { css } from 'styled-components';

const sizes = {
  desktop: 1024,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  let limiter;
  let value;

  if (label === 'untilTablet' || label === 'untilDesktop') {
    limiter = 'max-width';
    value = sizes[label];
  } else if (label === 'phone' || label === 'tablet' || label === 'desktop') {
    limiter = 'min-width';
    value = sizes[label];
  } else {
    value = label;
  }

  acc[label] = (...args) => css`
    @media (${limiter}: ${value}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
