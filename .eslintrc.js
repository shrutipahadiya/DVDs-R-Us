module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/destructuring-assignment': [0, 'always', { ignoreClassFields: true }],
    // 'react/destructuring-assignment': ['enabled', 'always', { ignoreClassFields: true }],

    // "react/destructuring-assignment": [enabled, "always", { "ignoreClassFields": true }]
  },
};
