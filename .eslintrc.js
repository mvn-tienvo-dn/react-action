module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [
            0,
            {
                "extensions": [".js", ".jsx"]
            }
        ],
      "react/react-in-jsx-scope": "off",
      "no-console": 2
    }
}
