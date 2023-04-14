module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'eslint-disable-next-line react/react-in-jsx-scope': 'off',
    'eslint-disable react/react-in-jsx-scope': 'off',
    'eslint-disable-next-line @typescript-eslint/indent': 'off',
    'eslint-disable @typescript-eslint/indent': 'off',
    'eslint-disable-next-line no-multiple-empty-lines': 'off',
    'eslint-disable no-multiple-empty-lines': 'off'
  }
}
