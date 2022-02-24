/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'react-app',
    'lacussoft',
    'lacussoft/react',
    'lacussoft/typescript',
  ],
  ignorePatterns: [
    'build/',
    'dist/',
    '!.babelrc.js',
    '!commitlint.config.js',
  ],
  plugins: [
    'jest',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
}
