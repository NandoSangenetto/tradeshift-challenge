import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Triangle from '.';

describe('Triangle test', () => {
  it('Should render the Triangle component properly', async () => {
    const { container } = render(<Triangle a="2" b="3" c="4" />);
    expect(container).toBeInTheDocument();
  });
});
