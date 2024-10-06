import globals from "globals";
import tseslint from "typescript-eslint";
import airbnbBaseConfig from "eslint-config-airbnb-base";
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    plugins: {
      prettier: prettierPlugin,
    },
    files: ["**/*.{js,mjs,cjs,ts}"],
    rules: {
        ...airbnbBaseConfig.rules,
        'react/jsx-filename-extension': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-explicit-any': 'off', 
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        "@typescript-eslint/ban-ts-comment": "error"
      }
  },
  {
    languageOptions: { 
        globals: {
          ...globals.browser,
          ...globals.node,
          myCustomGlobal: "readonly"
        },
        ecmaVersion: 2022,
        sourceType: "module",
        parser: Parser,
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
          project: ['./tsconfig.json'],
          tsconfigRootDir: __dirname,
        },
      },
  },
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
  },
  {
    ignores: ["node_modules", "dist"],
  },
  ...tseslint.configs.recommended,
];
