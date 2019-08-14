import React from 'react';
import PropTypes from 'prop-types';

import { calculatePercentagePoints } from '../../helpers/triangleMethods';

const Triangle = ({ a, b, c }) => {
  // Making the format of the triangle fit in the svg
  const { a: pointA, b: pointB, c: pointC } = calculatePercentagePoints({
    a,
    b,
    c,
  });

  const points = [[0, 0], [pointA, 0], [pointB, pointC]];

  // Converting points to the SVG format
  const pointsString = points.map(line => line.join(',')).join(' ');

  return (
    <svg height="300" width="300" viewBox="0 0 100 100">
      <polygon points={pointsString} />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};

Triangle.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
  c: PropTypes.number.isRequired,
};

export default Triangle;
