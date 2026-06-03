import js from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1. Aplicamos la configuración recomendada de ESLint base
  js.configs.recommended,
  // 2. Aplicamos la configuración que desactiva reglas conflictivas con Prettier
  prettierConfig,

  {
    files: ["**/*.{js,mjs,cjs}"],
    // Configuración de Lenguaje (Sustituye a 'env', 'parserOptions' y 'globals')
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      globals: {
        ...globals.node, // Esto sustituye a 'env: { node: true }'
        ...globals.es2015, // Esto sustituye a 'env: { es6: true }'
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
    },

    // Definición de Plugins (Sustituye a 'plugins: ['prettier']')
    plugins: {
      prettier: prettierPlugin,
    },

    // Tus reglas personalizadas (Copieteadas exactamente de tu archivo viejo)
    rules: {
      "prettier/prettier": "error",
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      camelcase: "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    },
  },
]);
