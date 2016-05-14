module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
	"extends": "airbnb-base",
    "parserOptions": {
		"ecmaVersion": 6,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
		"indent": ["error", "tab", { "VariableDeclarator": 2 }],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
		"strict": [
			0,
			"never"
		]
    }
};
