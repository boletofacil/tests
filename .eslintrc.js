module.exports = {
  root: true,
  extends: ['react-app'],
  plugins: ['prettier'],
  ignorePatterns: ['build/', 'dist/', '!.babelrc.js', '!commitlint.config.js'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
}
