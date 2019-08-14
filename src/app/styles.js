import { createGlobalStyle } from 'styled-components';

// We will add the content inside the createGlobalStyle just
// to make easier to test it. The only easy way to test it is
// creating a snapshot.
// Resources:
// https://spectrum.chat/styled-components/jest/testing-a-createglobalstyle~7ed712f0-e0f1-430b-85c9-bcc9aa23e077
// https://github.com/styled-components/styled-components/blob/0aa3170c255a49cd41c3fbeb2b8051b5d132f229/src/test/rehydration.test.js
// https://github.com/styled-components/styled-components/blob/0aa3170c255a49cd41c3fbeb2b8051b5d132f229/src/test/utils.js
export const BaseStyleContent = `
  * {
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    font-family: "Open Sans", "Helvetica Neue", "Lucida Grande", sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export const BaseStyle = createGlobalStyle`${BaseStyleContent}`;

export default { BaseStyle };
