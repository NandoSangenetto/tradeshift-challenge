import {
  validateTriangle,
  calculatePercentagePoints,
  triangleType,
} from './triangleMethods';

describe('Triangle methods test', () => {
  it('validateTriangle should validate if it is a valid triangle', () => {
    const sides = {
      a: 7,
      b: 10,
      c: 5,
    };
    const isValid = validateTriangle(sides);
    expect(isValid).toBeTruthy();
  });

  it('validateTriangle should return that the triangle is invalid', () => {
    const sides = {
      a: 5,
      b: 8,
      c: 3,
    };
    const isValid = validateTriangle(sides);
    expect(isValid).toBeFalsy();
  });

  it('calculatePercentagePoints should the percentage of the highest side length', () => {
    const sides = {
      a: 500,
      b: 500,
      c: 1000,
    };
    const points = calculatePercentagePoints(sides);
    expect(points).toEqual({
      a: 50,
      b: 50,
      c: 100,
    });
  });

  it('triangleType should return scalen', () => {
    const sides = {
      a: 30,
      b: 150,
      c: 179,
    };
    const type = triangleType(sides);
    expect(type).toBe('scalene');
  });

  it('triangleType should return isosceles', () => {
    const sides = {
      a: 50,
      b: 50,
      c: 100,
    };
    const type = triangleType(sides);
    expect(type).toBe('isosceles');
  });

  it('triangleType should return equilateral', () => {
    const sides = {
      a: 500,
      b: 500,
      c: 500,
    };
    const type = triangleType(sides);
    expect(type).toBe('equilateral');
  });
});
