module.exports = {
  extends: ['airbnb', 'eslint-config-prettier'],
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
  parser: 'babel-eslint',
};
