module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '.+\\.(otf)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  globals: {
    STORAGE_URL: 'https://storage.googleapis.com/glados',
  },
  modulePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/lib/'],
  testURL: 'http://localhost',
};
