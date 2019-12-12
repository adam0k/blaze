module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'jest-transform-svelte'
  },
  collectCoverage: true,
  collectCoverageFrom: [
      "**/*.svelte",
	    "**/*.js"
  	],
  moduleFileExtensions: ['js', 'svelte'],
  bail: false,
  verbose: true
};
