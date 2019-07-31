module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:css-modules/recommended",
		"plugin:prettier/recommended"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"css-modules",
		"prettier",
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-useless-return": [
			"error",
			"always"
		],
		"camelcase": [
			"error",
			"always"
		],
		"jsx-quotes": [
			"error", 
			"prefer-double"
		],
		"no-trailing-spaces": [
			"error",
			"always"
		]
	}
};