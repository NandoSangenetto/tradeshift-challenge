import React from 'react';
import PropTypes from 'prop-types';

const Triangle = ({ a, b, c }) => {
  const points = [[0, 0], [a, 0], [b, c]];

  const pointsString = points.map(line => line.join(',')).join(' ');

  return (
    <svg height="300" width="300">
      <polygon
        points={pointsString}
        style={{
          fill: 'lime',
          stroke: 'purple',
          strokeWidth: 1,
        }}
      />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};

Triangle.propTypes = {
  a: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
  c: PropTypes.string.isRequired,
};

export default Triangle;
