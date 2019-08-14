export const validateTriangle = ({ a, b, c }) => {
  if (a + b > c && b + c > a && c + a > b) {
    return true;
  }
  return false;
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
  if (a === b || a === c || b === c) return 'isosceles';
  return 'scalene';
};
