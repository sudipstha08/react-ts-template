const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
  extends: ['eslint:recommended', 'react-app', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'prettier/prettier': [1, prettierOptions],
        'no-console': 2,
        'react/prop-types': 'off',
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'cypress/no-unnecessary-waiting': 0,
        'no-alert': 'error',
        '@typescript-eslint/no-explicit-any': 0,
        'react/display-name': 0,
        'react-hooks/exhaustive-deps': 0,
        'sort-imports': 'off',
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'react/jsx-no-target-blank': 0,
        'no-unused-vars': 'off',
        'no-useless-return': 'error',
        'no-return-await': 'error',
        'no-else-return': 'error',
        '@typescript-eslint/no-var-requires': 0,
        'no-async-promise-executor': 0,
        'import/no-named-as-default': 0,
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'react/jsx-uses-react': 0,
        'react/react-in-jsx-scope': 1,
      },
    },
  ],
}
