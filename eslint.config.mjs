import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

const config = [
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
  },
  {
    ignores: [
      '**/eslint.config.mjs',
      '**/prettier.config.js',
      '**/next.config.mjs',
      '**/tailwind.config.js',
      '**/tsconfig.json',
      '**/postcss.config.mjs',
      '**/next-env.d.ts',
      '**/build/',
      '**/bin/',
      '**/obj/',
      '**/out/',
      '**/.next/',
    ],
  },
  {
    name: 'eslint/recommended', // eslintの設定
    rules: js.configs.recommended.rules,
  },
  ...tseslint.configs.recommended,
  {
    name: 'eslint-plugin-react', // reactの設定
    plugins: {
      react: reactPlugin,
    },
    rules: reactPlugin.configs['jsx-runtime'].rules,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    name: 'eslint-plugin-react-hooks', // react-hooksの設定
    plugins: {
      'react-hooks': hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  {
    name: 'eslint-plugin-next', // nextの設定
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    name: 'eslint-config-prettier', // prettierの設定
    ...eslintConfigPrettier,
  },
  {
    name: 'eslint-custom', // カスタムルールを追加
    rules: {
      '@typescript-eslint/no-unused-vars': 1,
    },
  },
]

export default config
