import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import fs from 'node:fs'
import path from 'node:path'
import { fixupConfigRules } from '@eslint/compat'
import tsParser from '@typescript-eslint/parser'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import reactPlugin from 'eslint-plugin-react'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(import.meta.dirname, '.prettierrc'), 'utf8'),
)

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
    },

    extends: fixupConfigRules(
      compat.extends(
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'prettier',
      ),
    ),

    plugins: {
      'react-refresh': reactRefresh,
      prettier,
      'jsx-a11y': jsxA11Y,
      compat,
      ...reactPlugin.configs.flat.recommended,
      import: importPlugin,
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          ...prettierOptions,
          endOfLine: 'auto',
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],

      'react-refresh/only-export-components': [
        'off',
        {
          allowConstantExport: true,
        },
      ],

      'template-curly-spacing': 'off',

      camelcase: 'off',
      'arrow-body-style': ['error', 'as-needed'],
      'class-methods-use-this': 'off',
      'import/imports-first': 'off',
      'import/newline-after-import': 'off',
      'import/no-dynamic-require': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-pascal-case': 'off',
      'import/no-named-as-default': 'off',
      'import/no-unresolved': 'error',
      'import/no-webpack-loader-syntax': 'off',
      'import/prefer-default-export': 'off',
      'react/display-name': 'off',
      'jsx-a11y/heading-has-content': 'off',
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          controlComponents: ['Input'],
        },
      ],
      'jsx-a11y/mouse-events-have-key-events': 'error',
      'max-len': 'off',
      'newline-per-chained-call': 'off',
      'no-confusing-arrow': 'off',
      'no-console': 'error',
      'no-plusplus': 'off',
      'no-underscore-dangle': 'off',
      'react/prop-types': 'off',
      'no-use-before-define': 'off',
      'prefer-template': 'error',
      'react/destructuring-assignment': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react/jsx-closing-tag-location': 'off',
      'react/forbid-prop-types': 'off',
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-filename-extension': 'off',
      'react/jsx-no-target-blank': 'off',
      'react/jsx-uses-vars': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-shadow': 'off',
      'react/no-array-index-key': 'off',
      'react/require-default-props': 'off',
      'react/require-extension': 'off',
      'react/self-closing-comp': 'off',
      'react/sort-comp': 'off',
      'require-yield': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'all',
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
    },

    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        alias: {
          map: [
            ['@/components', './src/components'],
            ['@/constants', './src/constants'],
            ['@/containers', './src/containers'],
            ['@/hooks', './src/hooks'],
            ['@/types', './src/types'],
            ['@/lib', './src/lib'],
            ['@/api', './src/api'],
            ['@/store', './src/store'],
            ['@/utils', './src/utils'],
            ['@/theme', './src/theme'],
            ['@/config', './src/config'],
          ],
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
      },
    },
  },
  {
    files: [
      'src/components/base/*',
      'src/components/atoms/**/*',
      'src/components/molecules/**/*',
    ],
    rules: {
      '@/no-restricted-imports': 'off',
    },
  },
  globalIgnores(['**/dist', '**/.eslintrc.cjs']),
])
