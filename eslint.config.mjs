import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';

export default defineConfig([
  // Основная конфигурация
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: ['dist/**/*', 'coverage/**/*', '__tests__/**/*.snap'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off'
    }
  },

  // Конфигурация для Jest
  {
    files: ['__tests__/**/*.{js,mjs,cjs}'],
    plugins: {
      jest: jestPlugin,
    },
    extends: ['jest/recommended'],
    rules: {
      'jest/no-disabled-tests': 'error',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error'
    }
  }
]);