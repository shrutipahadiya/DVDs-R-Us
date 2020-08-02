module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/destructuring-assignment': [0, 'always', { ignoreClassFields: true }],
  },
};
