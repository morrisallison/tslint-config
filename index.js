var msRecommended = require('tslint-microsoft-contrib/recommended_ruleset');

var tslintEslint = require('./rulesets/tslint-eslint-rules');
var vrsource = require('./rulesets/vrsource-tslint-rules');

var overrides = {
    'curly': false,
    'function-name': false,
    'interface-name': false,
    'missing-jsdoc': false,
    'no-any': false,
    'no-for-in-array': false,
    'no-increment-decrement': false,
    'no-multiline-string': false,
    'no-relative-imports': false,
    'no-single-line-block-comment': false,
    'one-variable-per-declaration': false,
    'ordered-imports': false,
    'prefer-array-literal': false,
    'restrict-plus-operands': false,
    'trailing-comma': false,
};

var rules = Object.assign({}, msRecommended.rules, tslintEslint.rules, vrsource.rules, overrides);

// Hide annoying deprecated message
delete rules['no-unused-variable'];

module.exports = { rules: rules };
