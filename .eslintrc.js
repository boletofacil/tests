module.exports = {
  root: true,
  extends: [
    'react-app',
    'plugin:jest/recommended',
    'plugin:jsx-control-statements/recommended',
    '@lacussoft',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: [
    'build/',
    'dist/',
    '!.babelrc*',
  ],
  plugins: [
    '@typescript-eslint',
    'jest',
    'jsx-control-statements',
    'react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-no-undef': [2, { allowGlobals: true }],
  },
}
