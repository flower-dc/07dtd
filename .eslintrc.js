const process = require('node:process')

process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  root: true,
  extends: '@antfu',
  rules: {
    'no-console': 'off',
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: '.*', args: 'none' },
    ],
    'no-invalid-this': 'off',
  },
}
