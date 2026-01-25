import js from "@eslint/js";
import sortRequires from "eslint-plugin-sort-requires";
import stylelintConfig from "eslint-config-stylelint";
import stylelintJestConfig from "eslint-config-stylelint/jest";

export default [
  { ignores: ["node_modules/**", "coverage/**"] },
  ...stylelintConfig,
  ...stylelintJestConfig,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2024,
      globals: { testRule: "readonly", testRuleConfigs: "readonly" },
      sourceType: "module",
    },
    plugins: { "sort-requires": sortRequires },
    rules: {
      ...js.configs.recommended.rules,
      eqeqeq: "error",
      "no-use-before-define": ["error", "nofunc"],
      "sort-requires/sort-requires": "error",
      strict: "off",
      "arrow-spacing": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-const": "error",
      "template-curly-spacing": "error",
    },
  },
];
