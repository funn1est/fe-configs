/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended', '@f1t/eslint-config'],
  plugins: ['react', 'react-hooks'],
};
