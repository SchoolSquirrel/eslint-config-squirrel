module.exports = {
    extends: [
        "eslint-config-airbnb-base",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    env: {
        "browser": true,
        "node": true,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"]
        },
        "import/resolver": {
            typescript: {}
        }
    },
    rules: {
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-this-alias": "off",
        "class-methods-use-this": "off",
        "eqeqeq": "off",
        "import/extensions": "off",
        "import/no-cycle": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "indent": ["error", 4],
        "linebreak-style": "off",
        "lines-between-class-members": "off",
        "max-classes-per-file": "off",
        "no-await-in-loop": "off",
        "no-bitwise": "off",
        "no-case-declarations": "off",
        "no-constant-condition": "off",
        "no-empty-function": "off",
        "no-multi-str": "off",
        "no-nested-ternary": "off",
        "no-param-reassign": "off",
        "no-plusplus": "off",
        "no-prototype-builtins": "off",
        "no-restricted-syntax": "off",
        "no-underscore-dangle": "off",
        "no-useless-constructor": "off",
        "quotes": ["error", "double"],
        "radix": "off",
        "semi": ['error', 'always'],
    },
    overrides: [{
        files: ["*.ts"],
    }]
};