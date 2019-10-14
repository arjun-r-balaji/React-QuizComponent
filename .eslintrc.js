module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  settings: {
    react: {
      version: "detect"
    }
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": ["off"],
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    indent: ["error", 2, { SwitchCase: 1 }],
    "comma-dangle": ["error", "never"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": ["warn", { allow: ["info", "error"] }],
    curly: "error",
    "no-else-return": "error",
    "no-unneeded-ternary": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "one-var": ["error", "never"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    strict: "error",
    "symbol-description": "error",
    yoda: ["error", "never", { exceptRange: true }]
  }
};
