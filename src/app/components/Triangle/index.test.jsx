import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Triangle from '.';

describe('Triangle test', () => {
  it('Should render the component properly', () => {
    const props = {
      a: 7,
      b: 10,
      c: 5,
    };
    const { container } = render(
      <Triangle a={props.a} b={props.a} c={props.a} />
    );
    expect(container).toBeInTheDocument();
  });

  it('Should be a SVG element', () => {
    const props = {
      a: 7,
      b: 10,
      c: 5,
    };
    const { container } = render(
      <Triangle a={props.a} b={props.a} c={props.a} />
    );

    const svg = container.firstChild;
    expect(svg.tagName).toBe('svg');
  });

  it('Should use one shape and it has to be a polygon', () => {
    const props = {
      a: 7,
      b: 10,
      c: 5,
    };
    const { container } = render(
      <Triangle a={props.a} b={props.a} c={props.a} />
    );

    const svg = container.firstChild;
    expect(svg.children.length).toEqual(1);
    expect(svg.firstChild.tagName).toBe('polygon');
  });

  it('Should show the fallback message', () => {
    const props = {
      a: 7,
      b: 10,
      c: 5,
    };
    const { getByText } = render(
      <Triangle a={props.a} b={props.a} c={props.a} />
    );

    expect(
      getByText('Sorry, your browser does not support inline SVG.')
    ).toBeInTheDocument();
  });

  it('Points is present with the right format', () => {
    const props = {
      a: 7,
      b: 10,
      c: 5,
    };
    const { container } = render(
      <Triangle a={props.a} b={props.a} c={props.a} />
    );

    const svg = container.firstChild;
    const polygon = svg.firstChild;
    const points = polygon.attributes[0].nodeValue;

    // Supported formats for this test
    // 200,10 250,190 160,210
    // 200 ,10 250,190 160,210
    // 200, 10 250,190 160,210
    // 200 , 10 250,190 160,210
    const regex = /^((\d+\s?,(\s)?\d+)\s?){3}$/g;
    expect(points.trim().match(regex).length).toEqual(1);
  });
});
