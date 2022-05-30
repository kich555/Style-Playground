module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': 0,
    'no-unused-vars': 'warn',
    'react/prop-types': 0,
    'eslint-plugin-import': 0,
    'anchor-is-valid': 0,
    // Parsing error: Unexpected token import
  },
};
