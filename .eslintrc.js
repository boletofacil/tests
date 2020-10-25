module.exports = {
  root: true,
  extends: [
    'react-app',
    '@lacussoft/standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
  },
}
