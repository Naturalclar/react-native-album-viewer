module.exports = {
    "extends": "airbnb",
    "plugins": [
        "flowtype"
    ],
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js"]}]
    },
    "env": {
        "browser": true,
        "es6": true,
    }
};