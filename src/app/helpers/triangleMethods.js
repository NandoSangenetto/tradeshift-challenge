export const validateTriangle = ({ a, b, c }) => {
  // if (a + b <= c || a + c <= b || b + c <= a) {
  if (a > b && a > c && b + c > a) {
    return false;
  }
  return true;
};

export const calculatePercentagePoints = ({ a, b, c }) => {
  const maxValue = Math.max(a, b, c);
  return {
    a: (100 * a) / maxValue,
    b: (100 * b) / maxValue,
    c: (100 * c) / maxValue,
  };
};

export const triangleType = ({ a, b, c }) => {
  if (a === b && b === c) return 'equilateral';
  if (a === b || a === c || b === c) return 'scalene';
  return 'scalene';
};
